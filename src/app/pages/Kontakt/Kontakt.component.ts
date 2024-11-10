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

  send() {
    this.service.send(this.form.getRawValue()).pipe(
      catchError(err => {
        this.serverError$.next(true);
        return of(err.message);
      })
    ).subscribe();
  }
}
