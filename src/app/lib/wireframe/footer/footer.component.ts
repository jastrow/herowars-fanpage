import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public transService = inject(TranslateService);

  switchLanguage() {
    this.transService.use(this.transService.currentLang == 'de' ? 'en' : 'de');
  }
 }
