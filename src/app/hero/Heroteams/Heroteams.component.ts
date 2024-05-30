import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { HeroService, IHeroTeam } from '../hero.service';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-heroteams',
  templateUrl: './Heroteams.component.html',
  styleUrl: './Heroteams.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamsComponent implements OnInit {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private service = inject(HeroService);
  public heroes = new BehaviorSubject<IHeroTeam[]>([]);
  public heroes$: Observable<IHeroTeam[]> | undefined;

  ngOnInit(): void {
    this.heroes$ = this.service.getHeroTeams().pipe(
      take(1),
      tap(d => {
        this.heroes.next(d);
        console.log(d);
      }),
    );
  }
}
