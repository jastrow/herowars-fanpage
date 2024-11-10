import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { KontaktService } from './Kontakt.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './Kontakt.component.html',
  styleUrl: './Kontakt.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KontaktComponent {
  private service = inject(KontaktService);
  
  public form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    content: new FormControl<string>('', [Validators.required]),
  })
  public serverError$ = new BehaviorSubject<boolean>(false);
  public mailSend = new BehaviorSubject<boolean>(false);
  public serverCheck$ = new BehaviorSubject<string>('');

  send() {
    this.serverError$.next(false);
    this.serverCheck$.next('');
    this.service.send(this.form.getRawValue()).pipe(
      catchError(err => {
        this.serverError$.next(true);
        return of(err.message);
      })
    ).subscribe(d => {
      if(d.status) {
        this.mailSend.next(true);
      } else {
        this.serverCheck$.next(d.error.join(' '));
      }
    });
  }
}
