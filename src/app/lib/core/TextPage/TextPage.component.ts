import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { ITextPage, TextPageService } from './TextPage.service';
import { Select } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-text-page',
  templateUrl: './TextPage.component.html',
  styleUrl: './TextPage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageComponent {
  public translate = inject(TranslateService);
  private service = inject(TextPageService);
  private routeActive = inject(ActivatedRoute);

  public editMode$ = new BehaviorSubject<boolean>(false);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  public page$: Observable<ITextPage>;
  public html = new FormControl<string>('');
  public subnav$ = new BehaviorSubject<string>('');
  private pageName = '';
  private langChange$ = new BehaviorSubject('de');
  
  private _id = signal<string>('');
  @Input() set id(id: string) {
    this._id.set(id);
  }
  private _savedPage = signal<ITextPage>({name: '', html: ''});
  
  constructor(){
    this.translate.onLangChange.subscribe(d => {
      this.langChange$.next(d.lang);
    });
    this.page$ = combineLatest([
        toObservable(this._id), 
        toObservable(this._savedPage), 
        this.langChange$
    ]).pipe(
      switchMap(([id, savePage, langChange]) => { 
        return this.service.getPage(id);
      }),
      tap(page => {
        this.html.setValue(page.html, {emitEvent:true});
        this.editMode$.next(false);
        this.pageName = page.name;
      }),
      catchError(e => of(e)),
    );
  }

  save() {
    const data = {
      name: this.pageName,
      html: this.html.value,
      lang: this.translate.currentLang,
    } as ITextPage;
    this.service.setPage(data).pipe(
      catchError(e => {
        return throwError(() => e);
      }),
    ).subscribe(d => {
      this._savedPage.set(d);
    });
  }
}
