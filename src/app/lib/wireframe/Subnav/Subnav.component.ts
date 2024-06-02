import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';
import { ISubMenuItem, SubnavService } from './Subnav.service';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [
    CommonModule,
    TuiSvgModule,
    RouterModule,
  ],
  templateUrl: './Subnav.component.html',
  styleUrl: './Subnav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavComponent implements OnInit {
  @Input() customRoutes: string[] = [];
  @Input() definedRoute: string = '';
  private service = inject(SubnavService);
  private router = inject(Router);
  public menuItems = new BehaviorSubject<ISubMenuItem[]>([]);

  ngOnInit(): void {
    this.menuItems.next(this.service.getMenuItems(this.definedRoute));
  }

  nav(path: string) {
    if(this.router.config.some(route => route.path?.includes(path))) {
      this.router.navigate([path]);
    }
  }
}
