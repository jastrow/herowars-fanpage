import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Select } from '@ngxs/store';
import { FormControl, FormGroup } from '@angular/forms';
import { ITitanlistFilter, KLASSEN, TIERLIST, TitanService } from '../titan.service';


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
  public filter$ = new BehaviorSubject<ITitanlistFilter>({filtertier: null, filterklasse: null});
  public form = new FormGroup({
    filterTier: new FormControl<string>('-'),
    filterKlasse: new FormControl<string>('-'),
  });
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.filter$ = this.service.getTitanFilter();
    const filterSubject = this.filter$.value;
    this.form.get('filterTier')?.setValue(filterSubject.filtertier);
    this.form.get('filterKlasse')?.setValue(filterSubject.filterklasse); 

    this.subscriptions.add(
      this.form.valueChanges.subscribe(d => {
        const filterTier = d.filterTier ? d.filterTier : '-';
        const filterKlasse = d.filterKlasse ? d.filterKlasse : '-';
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
