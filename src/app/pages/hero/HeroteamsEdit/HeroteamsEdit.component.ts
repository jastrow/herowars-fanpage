import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../hero.service';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-heroteams-edit',
  templateUrl: './HeroteamsEdit.component.html',
  styleUrl: './HeroteamsEdit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamsEditComponent implements OnInit { 
  private service = inject(HeroService);
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private teamId: number | null = null;
  public heroes$ = new Observable<string[]>();
  public selected$ = new BehaviorSubject<string[]>([]);
  public form = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      tap(params => {
        if(params['id']) {
          this.teamId = params['id'];
          this.service.getHeroTeam(params['id']).pipe(
            tap(team => {
              this.selected$.next(team.heroes);
              this.form.get('name')?.setValue(team.name);
              this.form.get('description')?.setValue(team.description);
            }),
            tap(d => {
              this.heroes$ = this.service.getHeroNames().pipe();
            }),
          ).subscribe();
        } else {
          this.heroes$ = this.service.getHeroNames().pipe();
        }
      }),
    ).subscribe();
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
      name: this.form.get('name')?.value ?? '',
      description: this.form.get('description')?.value ?? '',
      heroes: this.selected$.value, 
      id: this.teamId
    };
    this.service.saveHeroTeam(team).subscribe(d => {
      this.router.navigate(['/heroteams']);
    });
  }

}
