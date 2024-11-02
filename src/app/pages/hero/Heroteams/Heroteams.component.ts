import { ChangeDetectionStrategy, Component, Inject, OnInit, inject } from '@angular/core';
import { HeroService, IHeroTeam } from '../hero.service';
import { BehaviorSubject, Observable, Subject, catchError, finalize, of, startWith, switchMap, take, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-heroteams',
  templateUrl: './Heroteams.component.html',
  styleUrl: './Heroteams.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamsComponent implements OnInit {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private confirmationService = inject(ConfirmationService);
  private router = inject(Router);
  private service = inject(HeroService);
  public teams$ = new BehaviorSubject<IHeroTeam[]>([]);
  public showId: number | null = 0;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.getHeroTeams().subscribe(d => { 
      this.teams$?.next(d);
    });
  }

  viewTeam(team: IHeroTeam) {
    this.router.navigate(['/hero/heroteamviewer/'+team.id]);
  }

  editTeam(team: IHeroTeam) {
    this.router.navigate(['/hero/heroteamsedit/'+team.id]);
  }

  deleteTeam(e: Event, team: IHeroTeam): void {
      this.confirmationService.confirm({
          target: e.target as EventTarget,
          message: 'Sind Sie sicher, dass sie das Team löschen möchten?',
          header: 'Team löschen',
          icon: 'pi pi-exclamation-triangle',
          acceptIcon:"none",
          rejectIcon:"none",
          acceptLabel: 'Ja',
          rejectLabel: 'Abbrechen',
          rejectButtonStyleClass:"p-button-text",
          accept: () => { this.deleteTeamAccepted(team); },
    });
  }

  private deleteTeamAccepted(team: IHeroTeam): void {
    this.service.deleteTeam(team.id).pipe(
      catchError((e) => { console.log(e); return of([]); }),
    ).subscribe(d => {
      this.fetchData();
    });
  }

  showTeam(id: number | null) {
    this.showId = id;
  }
  closeTeam() {
    this.showId = 0;
  }
  getPetUrl(p: string) {
    return p ? 'url(/assets/begleiter/'+p+'.png)' : 'none';
  }
  getHeroUrl(h: string) {
    return h ? 'url(/assets/hero/'+h+'.png)' : 'none';
  }
  petsExist(pets: string[]): boolean {
    return pets.some(p => !!p);
  }
}
