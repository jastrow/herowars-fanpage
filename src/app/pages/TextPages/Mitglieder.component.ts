import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mitglieder',
  template: `<div class="content">
    <app-subnav [definedRoute]="'misc'"></app-subnav>
    <app-text-page pageName="Mitglieder"></app-text-page>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MitgliederComponent { }
