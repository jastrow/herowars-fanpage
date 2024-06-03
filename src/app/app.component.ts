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
  //title = 'hw';
  private service = inject(GlobalsettingsService);
  public shownav = new BehaviorSubject<boolean>(true);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public currentRoute: string | undefined = '';
  private subscription = new Subscription();
  private globalSettings = inject(GlobalsettingsService);

  ngOnInit(): void {
    this.service.showTopnav.subscribe(d => {
      this.shownav.next(d);
    });

    this.subscription.add(this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(() => {
        this.currentRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
        this.globalSettings.showTopnav = !['**','/','','welcome'].includes(this.currentRoute);
      }));

    this.subscription.add(this.service.backgroundImage.subscribe(image => {
      let b = document.getElementById('bodybg');
      if(b) b.style.backgroundImage = "url('"+image+"')";
    }));

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
