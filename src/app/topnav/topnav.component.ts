import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AuthSelectors } from '../Login/auth.selector';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent implements OnInit {
  @Select(AuthSelectors.getSessionId) sessionId$: { subscribe: (arg0: (sessionId: any) => void) => void; } | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSessionId();
  }

  // Beispiel für die Verwendung des Selektors in einer Methode
  getSessionId() {
    this.sessionId$?.subscribe((sessionId: any) => {
      console.log('Session ID:', sessionId);
    });
  }

 }



