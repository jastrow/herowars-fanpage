import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Observable, Subscription, catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import { Select } from '@ngxs/store';

export interface ISkin {
  heroId?: number;
  name: string;
  description: string;
  priority: number;
}

export interface IGlyph {
  heroId?: number;
  name: string;
  description: string;
  priority: number;
}

@Component({
  selector: 'app-hero-edit',
  templateUrl: './HeroEdit.component.html',
  styleUrl: './HeroEdit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditComponent implements OnInit {
  public service = inject(HeroService);
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  private subscription = new Subscription;
  private heroId: number | null = null;
  private heroName: string | null = null;
  
  public skinNames = [
    '','Standard','Angelic','Barbarian','Beach','Blooming','Celestial','Champion','Champion',
    'Cybernetic', 'Dark_Depths','Demonic','Illusionist','Lunar','Masquerade',
    'Mechanical','Nordic','Phoenix','Predator','Romantic','Rowdy','Solar','Spring','Stellar',
    'Sweettooth','Thundering','Winter'
  ];
  public glyphNames = [
    'Physischer Angriff', 'Rüstung', 'Ausweichen', 'Rüstungspenetration', 'Agilität',
    'Magischer Angriff', 'Gesundheit', 'Magische Verteidigung', 'Intelligenz', 'Stärke', 
    'Krit. Treffer', 'Magiestärke'
  ];
  public artefactNames = [
    'Waffe', 'Buch', 'Ring'
  ];
  public positions = [
    'Vorne', 'Hinten', 'Mitte'
  ];


  public skins: ISkin[] = [];
  public glyphs: IGlyph[] = [];

  public form = new FormGroup({
    hero_id: new FormControl<string>(''),
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
          this.heroName = params['id'];
          if(this.heroName) {
            this.service.getHeroByName(params['id'], true).subscribe(d => {
              this.heroId = d.hero_id ? d.hero_id : null;
              this.form.get('name')?.setValue(d.name);
              this.form.get('position')?.setValue(d.position);
              this.form.get('tierlist')?.setValue(d.tierlist);
              this.form.get('description')?.setValue(d.description);
              const funk = d.funktion.split(',');
              if(funk[0]) this.form.get('funktion')?.setValue(funk[0]);
              if(funk[1]) this.form.get('funktion2')?.setValue(funk[1]);
              const skins = d.skins.split(',');
              for(let i = 0; i < 6; i++) {
                if(skins[i]) this.form.get('skin'+(i+1))?.setValue(skins[i]);
              }
              const glyphs = d.glyphs.split(',');
              for(let i = 0; i < 5; i++) {
                if(glyphs[i]) this.form.get('glyph'+(i+1))?.setValue(glyphs[i]);
              }
              const artefacts = d.artefacts.split(',');
              for(let i = 0; i < 3; i++) {
                if(artefacts[i]) this.form.get('artefact'+(i+1))?.setValue(artefacts[i]);
              }
            });
          }
        }),
      ).subscribe()
    );

  }

  sendData() {
    let fdata = this.form.value;

    let skins: string[] = [];
    for(let i = 1; i <= 6; i++) {
      let skin = this.form.get('skin'+i)?.value;
      if(skin) skins.push(skin);
    }
    let glyphs: string[] = [];
    for(let i = 1; i <= 5; i++) {
      let glyph = this.form.get('glyph'+i)?.value;
      if(glyph) glyphs.push(glyph);
    }
    let artefacts: string[] = [];
    for(let i = 1; i <= 3; i++) {
      let artefact = this.form.get('artefact'+i)?.value;
      if(artefact) artefacts.push(artefact);
    }

    let data = {
      hero_id: this.heroId,
      name: fdata.name,
      position: fdata.position,
      tierlist: fdata.tierlist,
      funktion: fdata.funktion + (fdata.funktion2 ? ', '+fdata.funktion2 : ''),
      description: fdata.description,
      skins: skins.join(','),
      glyphs: glyphs.join(','),
      artefacts: artefacts.join(','),
    };

    this.service.sendHero(data).pipe(
      catchError(e => of(e)),
    ).subscribe(d => {
      this.router.navigate(['hero/'+data.name]);
    });
  }

  public abbrechen() {
    this.router.navigate(['heroes']);
  }

 }
