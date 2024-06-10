import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { ITextPage, TextPageService } from './TextPage.service';
import { Select } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-text-page',
  templateUrl: './TextPage.component.html',
  styleUrl: './TextPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageComponent {
  public editMode$ = new BehaviorSubject<boolean>(false);
  private service = inject(TextPageService);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  //public page$ = new BehaviorSubject<ITextPage>({name: '', html: ''});
  public page$: Observable<ITextPage>;
  public html = new FormControl<string>('');
  public subnav$ = new BehaviorSubject<string>('');
  private routeActive = inject(ActivatedRoute);
  private pageName = '';
  private _id = signal<string>('');
  @Input() set id(id: string) {
    this._id.set(id);
  }
  private _savedPage = signal<ITextPage>({name: '', html: ''});
  
  private subnavForPage = [
    {pageName: 'Abenteuer', subnav: 'misc'},
    {pageName: 'Mitglieder', subnav: 'gild'},
    {pageName: 'Gildenaktivität', subnav: 'gild'},
    {pageName: 'Regeln', subnav: 'gild'},
    {pageName: 'Tipps', subnav: 'misc'},
  ];

  constructor(){
    this.page$ = combineLatest(
      [toObservable(this._id), toObservable(this._savedPage)]
    ).pipe(
      switchMap(([id, savePage]) => {
        return savePage.html ? of(savePage) : this.service.getPage(id);
      }),
      tap(page => {
        this.html.setValue(page.html, {emitEvent:true});
        this.subnav$.next(this.getSubnavForPageName(page.name));
        this.editMode$.next(false);
      }),
      catchError(e => of(e)),
    );
  }

  getSubnavForPageName(pagename: string): string {
    let find = this.subnavForPage.find(pn => {
      return pn.pageName === pagename;
    });
    return find ? find.subnav : '';
  }

  save() {
    const data = {
      name: this.pageName,
      html: this.html.value,
    } as ITextPage;
    this.service.setPage(data).pipe(
      catchError(e => {
        // Anzeige HTML
        return throwError(() => e);
      }),
    ).subscribe(d => {
      this._savedPage.set(d);
    });
  }
}
