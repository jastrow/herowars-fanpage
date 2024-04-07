import { Injectable } from '@angular/core';

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
    return this.heroNames;
  }

}
