import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-abenteuer',
  templateUrl: './Abenteuer.component.html',
  styleUrl: './Abenteuer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbenteuerComponent { }
