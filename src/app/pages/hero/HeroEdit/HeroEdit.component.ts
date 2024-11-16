import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService, IPrimeNGSelectOption } from '../hero.service';
import { BehaviorSubject, Observable, Subscription, catchError, of, take, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    {name: 'Vorne', code: 'Vorne'},
    {name: 'Hinten', code: 'Hinten'},
    {name: 'Mitte', code: 'Mitte'},
  ];
  public tierlist: IPrimeNGSelectOption[] = [];
  public classes: IPrimeNGSelectOption[] = [];
  public skinlist: IPrimeNGSelectOption[] = [];
  public glyphlist: IPrimeNGSelectOption[] = [];
  public artlist: IPrimeNGSelectOption[] = [];


  public skins: ISkin[] = [];
  public glyphs: IGlyph[] = [];

  public form = new FormGroup({
    hero_id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    position: new FormControl<IPrimeNGSelectOption | null>(null),
    tierlist: new FormControl<IPrimeNGSelectOption | null>(null),
    funktion: new FormControl<IPrimeNGSelectOption | null>(null),
    funktion2: new FormControl<IPrimeNGSelectOption | null>(null),
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

  public title = new BehaviorSubject<string>('HERO_H1_EDIT');

  ngOnInit(): void {
    this.tierlist = this.service.tierlist.map(t => { return {name: t, code: t}; });
    this.classes = this.service.classes.map(t => { return {name: t, code: t}; });
    this.skinlist = this.skinNames.map(t => { return {name: t, code: t}; });
    this.glyphlist = this.glyphNames.map(t => { return {name: t, code: t}; });
    this.artlist = this.artefactNames.map(t => { return {name: t, code: t}; });

    this.activeRoute.data.pipe(tap(d => {
      this.title.next(d['title'])
    })).subscribe();

    this.subscription.add(
      this.activeRoute.params.pipe(
        tap(params => {
          this.heroName = params['id'];
          if(this.heroName) {
            this.service.getHeroByName(params['id'], true).subscribe(d => {
              this.heroId = d.hero_id ? d.hero_id : null;
              this.form.get('name')?.setValue(d.name);
              this.form.get('position')?.setValue({name: d.position, code: d.position});
              this.form.get('tierlist')?.setValue({name: d.tierlist, code: d.tierlist});
              this.form.get('description')?.setValue(d.description);
              const funk = d.funktion.split(',');
              if(funk[0]) this.form.get('funktion')?.setValue({name: funk[0], code: funk[0]});
              if(funk[1]) this.form.get('funktion2')?.setValue({name: funk[1], code: funk[1]});
              const skins = d.skins.split(',');
              for(let i = 0; i < 6; i++) {
                if(skins[i]) this.form.get('skin'+(i+1))?.setValue({name: skins[i], code: skins[i]});
              }
              const glyphs = d.glyphs.split(',');
              for(let i = 0; i < 5; i++) {
                if(glyphs[i]) this.form.get('glyph'+(i+1))?.setValue({name: glyphs[i], code: glyphs[i]});
              }
              const artefacts = d.artefacts.split(',');
              for(let i = 0; i < 3; i++) {
                if(artefacts[i]) this.form.get('artefact'+(i+1))?.setValue({name: artefacts[i], code: artefacts[i]});
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
    let glyphs: string[] = [];
    let artefacts: string[] = [];
    for(let i = 1; i <= 6; i++) {
      let skin = this.form.get('skin'+i)?.value.code;
      let glyph = this.form.get('glyph'+i)?.value.code;
      let artefact = this.form.get('artefact'+i)?.value.code;
      if(skin) skins.push(skin);
      if(glyph) glyphs.push(glyph);
      if(artefact) artefacts.push(artefact);
    }

    let data = {
      hero_id: this.heroId,
      name: fdata.name,
      position: fdata.position?.code,
      tierlist: fdata.tierlist?.code,
      funktion: fdata.funktion?.code + (fdata.funktion2?.code ? ','+fdata.funktion2?.code : ''),
      description: fdata.description,
      skins: skins.join(','),
      glyphs: glyphs.join(','),
      artefacts: artefacts.join(','),
    };

    this.service.sendHero(data).pipe(
      catchError(e => of(e)),
    ).subscribe(d => {
      this.router.navigate(['hero/hero/'+data.name]);
    });
  }

  public abbrechen() {
    this.router.navigate(['/hero/hero/'+this.heroName]);
  }

 }
