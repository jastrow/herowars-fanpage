import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ILogin, LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, catchError, finalize, of, throwError } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SaveSessionId } from '@lib/states/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrl: './Login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { 
  private service = inject(LoginService);
  private store = inject(Store);
  public loginErr = signal<boolean>(false);
  loading: boolean = false;

  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  public form = new FormGroup({
    email: new FormControl<string>(''),
    pass: new FormControl<string>(''),
  });

  public sendlogin() {
    this.loading = true;
    let email = this.form.get('email')?.value;
    email = email ? email : '';
    let pass = this.form.get('pass')?.value;
    pass = pass ? pass : '';
    this.service.login(email,pass).pipe(
      catchError(err => {
        this.loginErr.set(true);
        return throwError(err);
      }),
      finalize(() => {
        this.loading = false;
      }),
    ).subscribe(d => {
      if (d.errorMsg) {
        this.loginErr.set(true);
      } else {
        this.store.dispatch(new SaveSessionId(d.sessionId)).subscribe();
      }
    });
  }

  public logout() {
    this.store.dispatch(new SaveSessionId(null)).subscribe();
  }

}
