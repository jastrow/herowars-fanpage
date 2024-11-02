import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, finalize, map, of, takeUntil, tap } from 'rxjs';
import { GlobalsettingsService } from '../../../globalsettings.service';
import { HeroService, IHero } from '../hero.service';
import { Select, Store } from '@ngxs/store';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private subscription = new Subscription;
  private service = inject(GlobalsettingsService);
  public heroService = inject(HeroService);
  public hero$!: Observable<any>;
  public selectedSkin: number = 0;
  public skins: string[] = [];
  public heroName: string = '';
  private readonly close$ = new Subject();

  private store = inject(Store);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  constructor(
    private confirmationService: ConfirmationService, 
  ) {}
 
  ngOnInit(): void {
    this.subscription.add(
      this.route.params.pipe(
        tap(params => {
          this.hero$ = this.heroService.getHeroByName(params['id'], false).pipe(
            tap(d => { 
              this.skins = [...this.skins, ...d.skins.split(',')]; 
              this.heroName = d.name;
            }),
            map(d => {
              let newData = {
                ...d,
                skins: d.skins.split(','),
                glyphs: d.glyphs.split(','),
                artifacts: d.artefacts.split(','),
              };
              return newData;
            }),
          );
        }),
      ).subscribe(params => {
        this.service.backgroundImage = '/assets/poster/'+params['id']+'.png';
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextSkin() {
    let key = this.selectedSkin + 1;
    this.selectedSkin = key >= this.skins.length ? 0 : key;
  }
  prevSkin() {
    let key = this.selectedSkin - 1;
    this.selectedSkin = key < 0 ? this.skins.length - 1 : key;
  }
  getSkinName() {
    return this.skins[this.selectedSkin];
  }
  getSkinUrl() {
    let name = this.skins[this.selectedSkin];
    return '/assets/hero/' + this.heroName + (name === 'Standard' ? '' : '_'+name) + '.png';
  }
  selectSkin(skin: string) {
    this.selectedSkin = this.skins.indexOf(skin);
  }

  deleteHero() {
    this.heroService.deleteHero(this.heroName).pipe(
      catchError(e => of(e)),
    ).subscribe(d => {
      this.router.navigate(['/hero/heroes']);
    });
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Soll der Held wirklich gelöscht werden?',
        header: 'Bestätigung',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Ja',
        rejectLabel: 'Nein',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => { this.deleteHero(); },
        reject: () => {}
    });
  }

}
