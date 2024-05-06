import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { GlobalsettingsService } from '../globalsettings.service';
import { HeroService, IHero } from './hero.service';

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
  public hero$!: Observable<IHero>;
  public selectedSkin: number = 0;
  public skins: string[] = ['Standard'];
  public heroName: string = '';
  
  ngOnInit(): void {
    this.subscription.add(
      this.route.params.pipe(
        tap(params => {
          this.hero$ = this.heroService.getHero(params['id']).pipe(
            tap(d => { 
              this.skins = [...this.skins, ...d.skins]; 
              this.heroName = d.name;
            }),
          );
        }),
      ).subscribe(params => {
        this.service.setBgImage('/assets/poster/'+params['id']+'.png');
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
    let skinName = this.selectedSkin === 0 ? '' : '_' + this.getSkinName();
    return '/assets/hero/' + this.heroName + skinName + '.png';
  }

 }
