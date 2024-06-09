import { Injectable } from '@angular/core';


export interface IDefinedMenu {
  [key: string]: ISubMenuItem[];
}

export interface ISubMenuItem {
  path: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubnavService {

  public definedMenus: IDefinedMenu = {
    hero: [
      { path: '/hero/heroes', title: 'Helden' },
      { path: '/hero/heroteams', title: 'Helden Teams' },
    ],
    misc: [
      { path: '/page/Tipps', title: 'Tipps' },
      { path: '/page/Abenteuer', title: 'Abenteuer' },
    ],
    gild: [
      { path: '/page/Mitglieder', title: 'Mitglieder' },
      { path: '/page/Regeln', title: 'Regeln' },
      { path: '/page/Gildenaktivität', title: 'Gildenaktivität' },
    ],
  };

  constructor() { }

  public getMenuItems(menuName: string): ISubMenuItem[] {
    return this.definedMenus[menuName] ? this.definedMenus[menuName] : [];
  };

}
