import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-user',
  templateUrl: './ChangeUser.component.html',
  styleUrl: './ChangeUser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeUserComponent implements OnInit { 
  private service = inject(LoginService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  public form = new FormGroup({
    email: new FormControl<string>(''),
    name: new FormControl<string>(''),
    pass: new FormControl<string>(''),
    pass2: new FormControl<string>(''),
  });

  ngOnInit(): void {
    this.service.getMyData().subscribe(d => {
      this.form.controls.email.setValue(d.email);
      this.form.controls.name.setValue(d.name);
      this.cdr.detectChanges(); // PrimeNG floating label bug
    });
  }

  send() {
    this.service.setMyData(this.form.value).subscribe(d => {
      if(d.status === 'ok') {
        this.router.navigate(['/login']);
      } else {
        // Erroranzeige TODO
      }
    });
  }
}
