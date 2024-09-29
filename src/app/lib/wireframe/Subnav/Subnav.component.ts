import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISubMenuItem, SubnavService } from './Subnav.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './Subnav.component.html',
  styleUrl: './Subnav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['definedRoute'] || changes['customRoutes']) {
      this.menuItems.next(
        this.customRoutes.length ? this.customRoutes : this.service.getMenuItems(this.definedRoute)
      );
    }
  }

  nav(path: string) {
    this.router.navigate([path]);
  }
}
