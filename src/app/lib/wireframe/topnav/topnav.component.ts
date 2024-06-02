import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AuthSelectors } from '../../../pages/Login/auth.selector';
import { Observable } from 'rxjs';
import { SaveSessionId } from '../../../pages/Login/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent {
  private store = inject(Store);
  private router = inject(Router);
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;

  constructor() {}

  public logout() {
    this.store.dispatch(new SaveSessionId(null));
    this.router.navigate(['/']);
  }
 }



