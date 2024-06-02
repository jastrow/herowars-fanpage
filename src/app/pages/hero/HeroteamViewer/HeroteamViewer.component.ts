import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService, IHeroTeam } from '../hero.service';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-heroteam-viewer',
  templateUrl: './HeroteamViewer.component.html',
  styleUrl: './HeroteamViewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroteamViewerComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private service = inject(HeroService);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  
  private subscriptions = new Subscription();
  public team$ = new BehaviorSubject<IHeroTeam>({id:0,name:'',description:'',heroes:[]});
  private teamId = 0;

  ngOnInit(): void {
    this.subscriptions.add(
      this.activeRoute.params.pipe(
        tap(params => {
          this.teamId = params['id'];
          this.subscriptions.add(this.service.getHeroTeam(params['id']).pipe(
            tap(t => {
              this.team$.next(t);
            }),
          ).subscribe());
        }),
      ).subscribe()
    );
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  edit() {
    this.router.navigate(['heroteamsedit/'+this.teamId]);
  }

}
