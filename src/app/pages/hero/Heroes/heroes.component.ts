import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HeroService, ITierlist } from '../hero.service';
import { Select } from '@ngxs/store';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit, OnDestroy {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  public service = inject(HeroService);
  public filtered$ = new BehaviorSubject<string[]>([]);
  public filter$ = new BehaviorSubject<any>({filtertier: null, filterklasse: null});
  public form = new FormGroup({
    filterTier: new FormControl<ITierlist>({name: null, code: null}),
    filterKlasse: new FormControl<ITierlist>({name: null, code: null}),
  });
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.form.valueChanges.subscribe(d => this.service
        .getHeroNamesFiltered(d.filterTier?.name ?? '-', d.filterKlasse?.name ?? '-')
        .subscribe(d => { this.filtered$.next(d); }))
    );
    this.form.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

 }
