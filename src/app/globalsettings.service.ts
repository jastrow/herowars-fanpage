import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsettingsService {
  private router = inject(ActivatedRoute);

  public showTopnav = new BehaviorSubject<boolean>(true);
  public bgImage = new BehaviorSubject<string>('');

  constructor() { }

  public getShowTopnav(): BehaviorSubject<boolean> {
    return this.showTopnav;
  }
  public setShowTopnav(on: boolean): void {
    this.showTopnav.next(on);
  }

  public setBgImage(image: string): void {
    this.bgImage.next(image);
  }
  public getBgImage(): BehaviorSubject<string> {
    if(!this.bgImage.value) this.bgImage.next('/assets/mainpagebg30.jpg');
    return this.bgImage;
  }

}
