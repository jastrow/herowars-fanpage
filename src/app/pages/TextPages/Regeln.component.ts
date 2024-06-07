import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-regeln',
  template: `<div class="content">
    <app-subnav [definedRoute]="'misc'"></app-subnav>
    <app-text-page pageName="Regeln"></app-text-page>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegelnComponent { }
