import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, finalize, map, of, takeUntil, tap } from 'rxjs';
import { GlobalsettingsService } from '../../../globalsettings.service';
import { Select, Store } from '@ngxs/store';
import { TitanService } from '../titan.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitanComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private subscription = new Subscription;
  private service = inject(GlobalsettingsService);
  public titanService = inject(TitanService);
  private confirmationService = inject(ConfirmationService); 
  public titan$!: Observable<any>;
  public selectedSkin: number = 0;
  public skins: string[] = [];
  public titanName: string = '';
  private readonly close$ = new Subject();

  private store = inject(Store);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  constructor() {}
 
  ngOnInit(): void {
    this.subscription.add(
      this.route.params.pipe(
        tap(params => {
          this.titan$ = this.titanService.getTitanByName(params['id'], false).pipe(
            tap(d => { 
              this.skins = [params['id'], params['id'] + '_Champion']; 
              this.titanName = d.name;
            }),
            map(d => {
              let newData = {
                ...d,
                skins: this.skins,
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

  deleteTitan(): void {
  }
  withdraw() {
    this.subscription.add(
      this.titanService.deleteTitan(this.titanName).pipe(
        catchError(e => of(e)),
        finalize(() => this.close$.next(false)),
      ).subscribe(d => {
        this.router.navigate(['/titan/titans']);
      })
    );
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
    return '/assets/titans/' + name + '.png';
  }
  selectSkin(skin: string) {
    this.selectedSkin = this.skins.indexOf(skin);
  }

  deleteTitan2() {
    this.titanService.deleteTitan(this.titanName).pipe(
      catchError(e => of(e)),
    ).subscribe(d => {
      this.router.navigate(['/titan/titans']);
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
        accept: () => { this.deleteTitan2(); },
        reject: () => {}
    });
  }

 }
