import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ILogin, LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SaveSessionId } from './auth.actions';

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

  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  public form = new FormGroup({
    email: new FormControl<string>(''),
    pass: new FormControl<string>(''),
  });

  public sendlogin() {
    let email = this.form.get('email')?.value;
    email = email ? email : '';
    let pass = this.form.get('pass')?.value;
    pass = pass ? pass : '';
    this.service.login(email,pass).pipe<ILogin>(
      catchError(err => {
        this.loginErr.set(true);
        return throwError(err);
      }),
    ).subscribe(d => {
      if (d.errorMsg) {
        console.log('ERROR: ' + d.errorMsg);
      } else {
        this.store.dispatch(new SaveSessionId(d.sessionId)).subscribe();
      }
    });
  }

  public logout() {
    this.store.dispatch(new SaveSessionId(null)).subscribe();
  }

}
