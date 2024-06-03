import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-abenteuer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Abenteuer.component.html',
  styleUrl: './Abenteuer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbenteuerComponent { }
