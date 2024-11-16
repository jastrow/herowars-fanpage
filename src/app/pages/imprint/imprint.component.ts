import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprintComponent implements OnInit {
  public langNow = new BehaviorSubject<string>('de');
  public langService = inject(TranslateService);

  ngOnInit(): void {
    this.langNow.next(this.langService.currentLang);
    this.langService.onLangChange.subscribe(d => {
      this.langNow.next(d.lang);
    })
  }
 }
