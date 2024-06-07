import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tipps',
  template: `<div class="content">
    <app-subnav [definedRoute]="'misc'"></app-subnav>
    <app-text-page pageName="Tipps"></app-text-page>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TippsComponent { }
