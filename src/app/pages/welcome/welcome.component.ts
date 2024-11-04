import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {
  private service = inject(WelcomeService);
  private sanitizer = inject(DomSanitizer);
  public giftLinks = new BehaviorSubject<SafeHtml[]>([]);
  public giftsLoaded = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.service.getLinks().subscribe(links => {
        let newHtml: SafeHtml[] = [];
        links.forEach(t => {
          newHtml.push(this.sanitizer.bypassSecurityTrustHtml(t));
        });
        this.giftLinks.next(newHtml);
        this.giftsLoaded.next(true);
      }
    );
  }
}
