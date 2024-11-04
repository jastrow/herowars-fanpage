import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from '@lib/validators/match.validator';
import { passwordValidator } from '@lib/validators/password.validator';
import { LoginService } from '../login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-password-recover',
  templateUrl: './PasswordRecover.component.html',
  styleUrl: './PasswordRecover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordRecoverComponent {
  private service = inject(LoginService);
  public errorNoMail$ = new BehaviorSubject<boolean>(false);
  public successMail$ = new BehaviorSubject<boolean>(false);
  
  public errorNotChanged$ = new BehaviorSubject<boolean>(false);
  public successChanged$ = new BehaviorSubject<boolean>(false);
  
  public formMail = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  public newPass = new FormGroup({
    password: new FormControl<string>('', [Validators.required, passwordValidator()]),
    passwordConfirm: new FormControl<string>('',[Validators.required]),
    token: new FormControl<string>('',[Validators.required]),
  }, { validators: matchValidator('password', 'passwordConfirm') });

  sendMail() {
    const email = this.formMail.get('email')?.value ?? '';
    if(!this.formMail.valid) return;
    this.service.passwordRecover(email).subscribe(r => {
      if(r.status === 'ok') {
        this.successMail$.next(true);
      } else {
        this.errorNoMail$.next(true);
      }
    });
  }

  sendPassword() {
    const passwort = this.newPass.get('password')?.value ?? '';
    const token = this.newPass.get('token')?.value ?? '';
    if(!this.newPass.valid) return;
    this.service.changePassword(passwort, token).subscribe(r => {
      if(r.status === 'ok') {
        this.newPass.get('password')?.setValue('');
        this.newPass.get('passwordConfirm')?.setValue('');
        this.newPass.get('token')?.setValue('');
        this.newPass.markAsUntouched();
        this.newPass.markAsPristine();
        this.successChanged$.next(true);
        this.errorNotChanged$.next(false);
      } else {
        this.errorNotChanged$.next(true);
      }
    });
  }
 }
