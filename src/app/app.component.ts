import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { GlobalsettingsService } from './globalsettings.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hw';
  private service = inject(GlobalsettingsService);
  public shownav = new BehaviorSubject<boolean>(true);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public currentRoute: string | undefined = '';
  private subscription = new Subscription();
  private globalSettings = inject(GlobalsettingsService);

  ngOnInit(): void {
    this.service.getShowTopnav().subscribe(d => {
      this.shownav.next(d);
    });

    this.subscription.add(this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(() => {
        this.currentRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
        this.globalSettings.setShowTopnav(!['**','/','','welcome'].includes(this.currentRoute));
      }));

    this.subscription.add(this.service.getBgImage().subscribe(image => {
      let b = document.getElementById('bodybg');
      console.log(b);
      if(b) b.style.backgroundImage = "url('"+image+"')";
      console.log(image);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
