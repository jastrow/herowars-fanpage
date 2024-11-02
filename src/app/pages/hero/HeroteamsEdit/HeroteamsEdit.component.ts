import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HeroService, IHero } from '../hero.service';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-heroteams-edit',
  templateUrl: './HeroteamsEdit.component.html',
  styleUrl: './HeroteamsEdit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamsEditComponent implements OnInit { 
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private service = inject(HeroService);
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private teamId: number | null = null;
  public selected$ = new BehaviorSubject<string[]>([]);


  public heroes$ = new Observable<string[]>();
  public pets: any = [];

  public form: any;

  ngOnInit(): void {
    this.pets = this.service.pets;
    this.heroes$ = this.service.getHeroNames();
    this.form = new FormGroup({
      name: new FormControl<string>(''),
      description: new FormControl<string>(''),
      pet6: new FormControl<string>(''),
    });
    for(let i = 1; i <= 5; i++) {
      this.form.addControl('hero'+i, new FormControl<string>(''));
      this.form.addControl('pet'+i, new FormControl<string>(''));
    }

    this.activeRoute.params.pipe(
      tap(params => {
        if(params['id']) {
          this.teamId = params['id'];
          this.service.getHeroTeam(params['id']).pipe(
            tap(team => {
              this.selected$.next(team.heroes);
              this.form.get('name')?.setValue(team.name);
              this.form.get('description')?.setValue(team.description);
              this.form.get('pet6').setValue(team.pet);
              for(let i = 0; i < 5; i++) {
                this.form.get('hero'+(i+1)).setValue(team.heroes[i]);
                this.form.get('pet'+(i+1)).setValue(team.pets[i]);
              }
            }),
          ).subscribe();
        }
      }),
    ).subscribe();
  }

  getUrlHero(num: number) {
    let val = this.form.get('hero'+num).value;
    let url = '/assets/hero/'+ this.form.get('hero'+num).value +'.png';
    return val ? 'url('+url+')' : 'none';
  }
  getUrlPet(num: number) {
    let val = this.form.get('pet'+num).value;
    let url = '/assets/begleiter/'+ this.form.get('pet'+num).value +'.png';
    return val ? 'url('+url+')' : 'none';
  }

  heroClick(hero: string) {
    let selected = this.selected$.value;
    if (selected.includes(hero)) {
      selected = selected.filter(h => h !== hero);
    } else {
      if(selected.length >= 5) return;
      selected.push(hero);
    }
    this.selected$.next(selected);
  }

  getHeroClass(hero: string) {
    let selected = this.selected$.value;
    return 'heroSelector ' + (selected.includes(hero) ? 'heroSelectorSelected' : '');
  }

  save() {
    const team = {
      id: this.teamId,
      name: this.form.get('name')?.value ?? '',
      description: this.form.get('description')?.value ?? '',
      pet: this.form.controls.pet6.value,
      heroes: [
        this.form.controls.hero1.value ? this.form.controls.hero1.value : null,
        this.form.controls.hero2.value ? this.form.controls.hero2.value : null,
        this.form.controls.hero3.value ? this.form.controls.hero3.value : null,
        this.form.controls.hero4.value ? this.form.controls.hero4.value : null,
        this.form.controls.hero5.value ? this.form.controls.hero5.value : null,
      ], 
      pets: [
        this.form.controls.pet1.value ? this.form.controls.pet1.value : null,
        this.form.controls.pet2.value ? this.form.controls.pet2.value : null,
        this.form.controls.pet3.value ? this.form.controls.pet3.value : null,
        this.form.controls.pet4.value ? this.form.controls.pet4.value : null,
        this.form.controls.pet5.value ? this.form.controls.pet5.value : null,
      ],
    };
    this.service.saveHeroTeam(team).subscribe(d => {
      this.router.navigate(['/hero/heroteams']);
    });
  }

}
