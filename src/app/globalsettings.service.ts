import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsettingsService {

  private STANDARD_IMAGE = '/assets/mainpagebg30.jpg';
  private showTopnav$ = new BehaviorSubject<boolean>(true);
  private backgroundImage$ = new BehaviorSubject<string>(this.STANDARD_IMAGE);

  constructor() { }

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


}
