import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPrimeNGSelectOption, TitanService } from '../titan.service';
import { Observable, Subscription, catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    {name: 'Vorne', code: 'Vorne'},
    {name: 'Hinten', code: 'Hinten'},
    {name: 'Mitte', code: 'Mitte'},
  ];



  public skins: ISkin[] = [];
  public glyphs: IGlyph[] = [];

  public form = new FormGroup({
    titan_id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    position: new FormControl<IPrimeNGSelectOption>({code:'',name:''}),
    tierlist: new FormControl<IPrimeNGSelectOption>({code:'',name:''}),
    funktion: new FormControl<IPrimeNGSelectOption>({code:'',name:''}),
    funktion2: new FormControl<IPrimeNGSelectOption>({code:'',name:''}),
    description: new FormControl<string>(''),
  });

  ngOnInit(): void {
    this.subscription.add(
      this.activeRoute.params.pipe(
        tap(params => {
          this.titanName = params['id'];
          if(this.titanName) {
            this.service.getTitanByName(params['id'], true).subscribe(d => {
              this.titanId = d.titan_id ? d.titan_id : null;
              this.form.get('name')?.setValue(d.name);
              this.form.get('position')?.setValue({code:d.position,name:d.position});
              this.form.get('tierlist')?.setValue({code:d.tierlist,name:d.tierlist});
              this.form.get('description')?.setValue(d.description);
              const funk = d.funktion.split(',');
              if(funk[0]) this.form.get('funktion')?.setValue({code:funk[0],name:funk[0]});
              if(funk[1]) this.form.get('funktion2')?.setValue({code:funk[1],name:funk[1]});
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
      position: fdata.position?.code,
      tierlist: fdata.tierlist?.code,
      funktion: fdata.funktion?.code + (fdata.funktion2?.code ? ', '+fdata.funktion2?.code : ''),
      description: fdata.description,
    };

    this.service.sendTitan(data).pipe(
      catchError(e => { debugger; return of(e); }),
    ).subscribe(d => {
      this.router.navigate(['titan/titan/'+data.name]);
    });
  }

  public abbrechen() {
    this.router.navigate(['/titan/'+this.titanName]);
  }

 }
