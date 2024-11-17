import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { SaveSessionId } from '@lib/states/auth/auth.actions';
import { Router } from '@angular/router';
import { LoginService } from '@pages/Auth/login.service';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';


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
  protected expanded = false;
  protected open = false;
  protected switch = false;

  public items = new BehaviorSubject<MenuItem[]>([]);
  private lang = inject(TranslateService);

  public items_DE = [
    {
      label: 'Helden',
      icon: 'pi pi-sparkles',
      items: [
        {
          label: 'Übersicht',
          route: '/hero/heroes'
        },
        {
          label: 'Teams',
          route: '/hero/heroteams'
        },
        {
          label: 'Titanen',
          route: '/titan/titans'
        }
      ]
    },
    {
      label: 'Gilde',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Regeln',
          route: '/page/Regeln'
        },
        {
          label: 'Mitglieder',
          route: '/page/Mitglieder'
        },
        {
          label: 'Gildenaktivität',
          route: '/page/Gildenaktivität'
        },
        {
          label: 'Tipps',
          route: '/page/Tipps'
        }
      ]
    },
    {
      label: 'Abenteuer',
      route: '/page/Abenteuer'
    },
  ];

  public items_EN = [
    {
      label: 'Heroes',
      icon: 'pi pi-sparkles',
      items: [
        {
          label: 'Overview',
          route: '/hero/heroes'
        },
        {
          label: 'Teams',
          route: '/hero/heroteams'
        },
        {
          label: 'Titans',
          route: '/titan/titans'
        }
      ]
    },
    {
      label: 'Guild',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Rules',
          route: '/page/Regeln'
        },
        {
          label: 'Members',
          route: '/page/Mitglieder'
        },
        {
          label: 'Activity',
          route: '/page/Gildenaktivität'
        },
        {
          label: 'Tips',
          route: '/page/Tipps'
        }
      ]
    },
    {
      label: 'Adventures',
      route: '/page/Abenteuer'
    },
  ];

  constructor() {
    this.items.next(this.lang.currentLang  === 'de' ? this.items_DE : this.items_EN);
    this.lang.onLangChange.subscribe(d => {
      this.items.next(d.lang === 'de' ? this.items_DE : this.items_EN);
    });
  }

  public logout() {
    this.service.logout().pipe(
      catchError(e => of(e)),
    ).subscribe(l => {
      this.store.dispatch(new SaveSessionId(null));
      this.router.navigate(['/']);
    });
  }
 }



