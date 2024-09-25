import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, finalize, map, of, takeUntil, tap } from 'rxjs';
import { GlobalsettingsService } from '../../../globalsettings.service';
import { Select, Store } from '@ngxs/store';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { TitanService } from '../titan.service';

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
  public titan$!: Observable<any>;
  public selectedSkin: number = 0;
  public skins: string[] = [];
  public titanName: string = '';
  private readonly close$ = new Subject();

  private store = inject(Store);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}
 
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

  deleteTitan(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).pipe(takeUntil(this.close$)).subscribe();
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

  navEdit() {
    this.router.navigate(['/titan/edittitan/'+this.titanName]);
  }

 }
