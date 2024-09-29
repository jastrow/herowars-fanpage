import { ChangeDetectionStrategy, Component, Inject, OnInit, inject } from '@angular/core';
import { HeroService, IHeroTeam } from '../hero.service';
import { Observable, Subject, catchError, finalize, of, startWith, switchMap, take, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroteams',
  templateUrl: './Heroteams.component.html',
  styleUrl: './Heroteams.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamsComponent implements OnInit {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private router = inject(Router);
  private service = inject(HeroService);
  public teams$: Observable<IHeroTeam[]> | undefined;
  private reloadSubject = new Subject<void>();
  private readonly close$ = new Subject();
  private deleteId: number|null = null;
  readonly columns = ['name', 'held0', 'held1', 'held2', 'held3', 'held4', 'actions'];

  constructor() {}

  ngOnInit(): void {
    this.teams$ = this.reloadSubject.pipe(
      startWith(null),
      switchMap(() => this.fetchData())
    );
  }

  fetchData() {
    return this.service.getHeroTeams().pipe(take(1));
  }

  viewTeam() {
    //this.router.navigate(['/hero/heroteamviewer/'+team.id]);
  }

  editTeam() {
    //this.router.navigate(['/hero/heroteamsedit/'+team.id]);
  }

  deleteTeam(): void {
  }

  withdraw() {
    this.service.deleteTeam(this.deleteId).pipe(
      catchError(e => of(e)),
      finalize(() => this.close$.next(false)),
    ).subscribe(d => {
      this.reloadSubject.next();
    })
  }

}
