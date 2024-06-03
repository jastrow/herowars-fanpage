import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISubMenuItem, SubnavService } from './Subnav.service';
import { Router, RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiSvgModule,
  ],
  templateUrl: './Subnav.component.html',
  styleUrl: './Subnav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavComponent implements OnInit {
  @Input() customRoutes: ISubMenuItem[] = [];
  @Input() definedRoute: string = '';
  private service = inject(SubnavService);
  private router = inject(Router);
  public menuItems = new BehaviorSubject<ISubMenuItem[]>([]);

  ngOnInit(): void {
    this.menuItems.next(
      this.customRoutes.length ? this.customRoutes : this.service.getMenuItems(this.definedRoute)
    );
  }

  nav(path: string) {
    this.router.navigate([path]);
  }
}
