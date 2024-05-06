import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroService } from '../hero/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  private service = inject(HeroService);
  public heroes = new BehaviorSubject<string[]>([]);
  
  ngOnInit(): void {
    this.heroes.next(this.service.getHeroNames());
  }


 }
