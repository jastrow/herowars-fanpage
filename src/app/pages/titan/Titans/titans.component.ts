import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Select } from '@ngxs/store';
import { FormControl, FormGroup } from '@angular/forms';
import { ITitanlistFilter, KLASSEN, TIERLIST, TitanService } from '../titan.service';
import { ITierlist } from '@pages/hero/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './titans.component.html',
  styleUrl: './titans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitansComponent implements OnInit, OnDestroy {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  public service = inject(TitanService);
  public filtered$ = new BehaviorSubject<string[]>([]);
  public filter$ = new BehaviorSubject<ITitanlistFilter>({filtertier: '-', filterklasse: '-'});
  public form = new FormGroup({
    filterTier: new FormControl<ITierlist>({name: null, code: null}),
    filterKlasse: new FormControl<ITierlist>({name: null, code: null}),
  });
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.filter$ = this.service.getTitanFilter();

    this.subscriptions.add(
      this.form.valueChanges.subscribe(d => {
        const filterTier = d.filterTier?.code ? d.filterTier.code : '-';
        const filterKlasse = d.filterKlasse?.code ? d.filterKlasse.code : '-';
        this.service.setTitanFilters({
          filtertier: filterTier as TIERLIST,
          filterklasse: filterKlasse as KLASSEN,
        });
      })
    );

    this.subscriptions.add(
      this.filter$.subscribe(filter => {
        const filterTier = filter.filtertier ? filter.filtertier : '-';
        const filterKlasse = filter.filterklasse ? filter.filterklasse : '-';
        this.service.getTitanNamesFiltered(filterTier,filterKlasse).subscribe(d => {
          this.filtered$.next(d);
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

 }
