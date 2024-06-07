import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { ITextPage, TextPageService } from './TextPage.service';
import { Select } from '@ngxs/store';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-page',
  templateUrl: './TextPage.component.html',
  styleUrl: './TextPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageComponent implements OnInit {
  @Input() pageName = '';
  public editMode$ = new BehaviorSubject<boolean>(false);
  private service = inject(TextPageService);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  public page$ = new BehaviorSubject<ITextPage>({name: '', html: ''});
  public html = new FormControl<string>('');

  ngOnInit(): void {
    this.service.getPage(this.pageName).subscribe(d => {
      this.page$.next(d);
      this.html.setValue(d.html, {emitEvent:true});
    });
    this.service.getPage(this.pageName).subscribe(d => this.page$.next(d));
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
