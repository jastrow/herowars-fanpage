import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IHero {
  name: string;
  skins: string[];
  position: string;
  tier: string;
  function: string;
  prio_glyphs: string[];
  prio_artifacts: string[];
  prio_skins: string[];
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public heroNames = [
    'Amira', 'Andvari', 'Arachne', 'Artemis', 'Astaroth', 'Astrid-Lucas', 'Aurora', 'Celeste', 
    'Chabba', 'Cleaver', 'Cornelius', 'Corvus', 'Dante', 'Daredevil', 'Darkstar', 'Dorian', 
    'Elmir', 'Faceless', 'Fafnir', 'Fox', 'Galahad', 'Ginger', 'Heidi', 'Helios', 'Iris', 
    'Isaac', 'Ishmael', 'Jet', 'Jhu', 'Jorgen', 'Judge', 'Julius', 'Kai', 'Karkh', 'Kayla', 
    'Keira', 'Krista', 'Lars', 'Lian', 'Lilith', 'Luther', 'Markus', 'Martha', 'Maya', 'Mojo', 
    'Morrigan', 'Mushy-Shroom', 'Nebula', 'Orion', 'Peppy', 'Phobos', 'Polaris', 'Qing-Mao', 
    'Rufus', 'Satori', 'Sebastian', 'Thea', 'Tristan', 'Yasmine', 'Ziri', 'Aidan', 'Alvanor'
  ];

  constructor() { }

  public getHeroNames(): string[] {
    return this.heroNames.sort();
  }

  public getHero(name: string): Observable<IHero> {
    return of({
      name: 'Aidan',
      text: 'Hier steht Text. Hier steht Text. Hier steht Text. Hier steht Text. Hier steht Text. Hier steht Text.',
      skins: ['Solar','Cybernetic','Masquerade'],
      position: 'Hinten',
      tier: 'S',
      function: 'Heiler / Magier',
      prio_glyphs: ['Magischer Angriff', 'Lebenspunkte', 'Intelligenz', 'Magische Abwehr', 'Rüstung'],
      prio_artifacts: ['Buch','Ring','Waffe'],
      prio_skins: ['Solar','Standard','Cybernetic','Masquerade'],
    } as IHero);
  }

}
