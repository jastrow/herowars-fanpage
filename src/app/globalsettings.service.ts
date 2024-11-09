import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsettingsService {

  private STANDARD_IMAGE = '/assets/poster/Aidan.png';
  private showTopnav$ = new BehaviorSubject<boolean>(true);
  private backgroundImage$ = new BehaviorSubject<string>(this.STANDARD_IMAGE);

  constructor() {
    let rand = Math.floor(Math.random() * this.posters.length) + 1;
    this.backgroundImage = '/assets/poster/' + this.posters[rand];
  }

  get showTopnav(): Observable<boolean> {
    return this.showTopnav$.asObservable();
  }
  set showTopnav(val: boolean) {
    this.showTopnav$.next(val);
  }

  get backgroundImage(): Observable<string> {
    return this.backgroundImage$.asObservable();
  }
  set backgroundImage(image: string) {
    if(!image) image = this.STANDARD_IMAGE;
    this.backgroundImage$.next(image);
  }

  private posters = [
    'Aidan.png',
    'Alvanor.png',
    'Amira.png',
    'Andvari.png',
    'Angus.png',
    'Arachne.png',
    'Araji.png',
    'Artemis.png',
    'Astaroth.png',
    'Astrid-Lucas.png',
    'Augustus.png',
    'Aurora.png',
    'Celeste.png',
    'Cleaver.png',
    'Cornelius.png',
    'Corvus.png',
    'Dante.png',
    'Daredevil.png',
    'Darkstar.png',
    'Dorian.png',
    'Eden.png',
    'Elmir.png',
    'Faceless.png',
    'Fafnir.png',
    'Fox.png',
    'Galahad.png',
    'Ginger.png',
    'Heidi.png',
    'Helios.png',
    'Iris.png',
    'Isaac.png',
    'Ishmael.png',
    'Jet.png',
    'Jhu.png',
    'Jorgen.png',
    'Judge.png',
    'Julius.png',
    'Kai.png',
    'Karkh.png',
    'Kayla.png',
    'Keira.png',
    'Krista.png',
    'Lars.png',
    'Lian.png',
    'Lilith.png',
    'Luther.png',
    'Markus.png',
    'Martha.png',
    'Maya.png',
    'Mojo.png',
    'Moloch.png',
    'Mushy-Shroom.png',
    'Nebula.png',
    'Orion.png',
    'Peppy.png',
    'Phobos.png',
    'Polaris.png',
    'Qing-Mao.png',
    'Rufus.png',
    'Satori.png',
    'Sebastian.png',
    'Solaris.png',
    'Thea.png',
    'Tristan.png',
    'Yasmine.png',
    'Ziri.png',
  ];

}
