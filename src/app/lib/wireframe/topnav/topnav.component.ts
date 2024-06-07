import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, catchError, of } from 'rxjs';
import { SaveSessionId } from '@lib/states/auth/auth.actions';
import { Router } from '@angular/router';
import { LoginService } from '@pages/Login/login.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent {
  private store = inject(Store);
  private router = inject(Router);
  private service = inject(LoginService);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  constructor() {}

  public logout() {
    this.service.logout().pipe(
      catchError(e => of(e)),
    ).subscribe(l => {
      this.store.dispatch(new SaveSessionId(null));
      this.router.navigate(['/']);
    });
  }
 }



