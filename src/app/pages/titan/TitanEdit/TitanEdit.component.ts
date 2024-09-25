import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TitanService } from '../titan.service';
import { Observable, Subscription, catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import { Select } from '@ngxs/store';

export interface ISkin {
  titanId?: number;
  name: string;
  description: string;
  priority: number;
}

export interface IGlyph {
  titanId?: number;
  name: string;
  description: string;
  priority: number;
}

@Component({
  selector: 'app-titan-edit',
  templateUrl: './TitanEdit.component.html',
  styleUrl: './TitanEdit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitanEditComponent implements OnInit {
  public service = inject(TitanService);
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  private subscription = new Subscription;
  private titanId: number | null = null;
  private titanName: string | null = null;
  
  public positions = [
    'Vorne', 'Hinten', 'Mitte'
  ];


  public skins: ISkin[] = [];
  public glyphs: IGlyph[] = [];

  public form = new FormGroup({
    titan_id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    position: new FormControl<string>(''),
    tierlist: new FormControl<string>(''),
    funktion: new FormControl<string>(''),
    funktion2: new FormControl<string>(''),
    description: new FormControl<string>(''),
    skin1: new FormControl<string>(''),
    skin2: new FormControl<string>(''),
    skin3: new FormControl<string>(''),
    skin4: new FormControl<string>(''),
    skin5: new FormControl<string>(''),
    skin6: new FormControl<string>(''),
    glyph1: new FormControl<string>(''),
    glyph2: new FormControl<string>(''),
    glyph3: new FormControl<string>(''),
    glyph4: new FormControl<string>(''),
    glyph5: new FormControl<string>(''),
    artefact1: new FormControl<string>(''),
    artefact2: new FormControl<string>(''),
    artefact3: new FormControl<string>(''),
  });

  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  //artefact

  ngOnInit(): void {
    this.subscription.add(
      this.activeRoute.params.pipe(
        tap(params => {
          this.titanName = params['id'];
          if(this.titanName) {
            this.service.getTitanByName(params['id'], true).subscribe(d => {
              this.titanId = d.titan_id ? d.titan_id : null;
              this.form.get('name')?.setValue(d.name);
              this.form.get('position')?.setValue(d.position);
              this.form.get('tierlist')?.setValue(d.tierlist);
              this.form.get('description')?.setValue(d.description);
              const funk = d.funktion.split(',');
              if(funk[0]) this.form.get('funktion')?.setValue(funk[0]);
              if(funk[1]) this.form.get('funktion2')?.setValue(funk[1]);
            });
          }
        }),
      ).subscribe()
    );

  }

  sendData() {
    let fdata = this.form.value;

    let data = {
      titan_id: this.titanId,
      name: fdata.name,
      position: fdata.position,
      tierlist: fdata.tierlist,
      funktion: fdata.funktion + (fdata.funktion2 ? ', '+fdata.funktion2 : ''),
      description: fdata.description,
    };

    this.service.sendTitan(data).pipe(
      catchError(e => { debugger; return of(e); }),
    ).subscribe(d => {
      this.router.navigate(['titan/titan/'+data.name]);
    });
  }

  public abbrechen() {
    this.router.navigate(['/titan/titan/'+this.titanName]);
  }

 }
