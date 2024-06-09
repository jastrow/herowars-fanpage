import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, switchMap, tap } from 'rxjs';
import { ITextPage, TextPageService } from './TextPage.service';
import { Select } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-text-page',
  templateUrl: './TextPage.component.html',
  styleUrl: './TextPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageComponent implements OnInit {
  public editMode$ = new BehaviorSubject<boolean>(false);
  private service = inject(TextPageService);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  public page$ = new BehaviorSubject<ITextPage>({name: '', html: ''});
  public html = new FormControl<string>('');
  public subnav$ = new BehaviorSubject<string>('');
  private routeActive = inject(ActivatedRoute);
  private pageName = '';

  private subnavForPage = [
    {pageName: 'Abenteuer', subnav: 'misc'},
    {pageName: 'Mitglieder', subnav: 'gild'},
    {pageName: 'Gildenaktivität', subnav: 'gild'},
    {pageName: 'Regeln', subnav: 'gild'},
    {pageName: 'Tipps', subnav: 'misc'},
  ];

  ngOnInit(): void {
    this.routeActive.paramMap.pipe(
      switchMap(params => {
        this.pageName = params.get('id') ?? '';
        return this.service.getPage(this.pageName).pipe(
          tap(page => console.log(page)),
          catchError(e => of(e)),
        );
      })
    ).subscribe(d => {
      this.page$.next(d);
      this.html.setValue(d.html, {emitEvent:true});
      this.subnav$.next(this.getSubnavForPageName(d.name));
    });
  }

  getSubnavForPageName(pagename: string): string {
    let find = this.subnavForPage.find(pn => {
      return pn.pageName === pagename;
    });
    console.log(find);
    return find ? find.subnav : '';
  }

  save() {
    const data = {
      name: this.pageName,
      html: this.html.value,
    } as ITextPage;
    this.service.setPage(data).pipe(
      catchError(e => {
        return of(e);
      }),
    ).subscribe(d => {
      this.page$.next(d);
      this.html.setValue(d.html, {emitEvent:true});
      this.editMode$.next(false);
    });
  }
}
