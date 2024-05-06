import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrl: './Login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { 
  private service = inject(LoginService);

  public form = new FormGroup({
    email: new FormControl<string>(''),
    pass: new FormControl<string>(''),
  });

  public sendlogin() {
    console.log('sendlogin');

    let email = this.form.get('email')?.value;
    email = email ? email : '';
    let pass = this.form.get('pass')?.value;
    pass = pass ? pass : '';
    console.log(email,pass);
    this.service.login(email,pass).subscribe(d => {
      console.log(d);
    });
  }
}
