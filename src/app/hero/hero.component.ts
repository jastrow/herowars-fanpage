import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>hero works!</p>`,
  styleUrls: ['./hero.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }
