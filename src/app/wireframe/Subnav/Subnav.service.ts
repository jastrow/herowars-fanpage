import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';


export interface IDefinedMenu {
  [key: string]: string[];
}

export interface ISubMenuItem {
  path: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubnavService {
  private router = inject(Router);

  public definedMenus: IDefinedMenu = {
    hero: ['heroes', 'heroteams']
  };

  constructor() { }

  public getMenuItems(menuName: string): ISubMenuItem[] {
    if(!this.definedMenus[menuName]) return [];
    return this.definedMenus[menuName].map(route => {
      let routerConfig = this.router.config.find(r => r.path?.includes(route));
      return routerConfig 
        ? { 
            ...{}, 
            path: (routerConfig.path ? routerConfig.path : ''), 
            title: (routerConfig.data && routerConfig.data['title'] ? routerConfig.data['title'] : '') 
          } 
        : { path: '', title: '' };
    });
  };

}
