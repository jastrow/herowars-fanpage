import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginService } from '../Auth/login.service';
import { ENVIRONMENT } from '@lib/util/tokens';

export interface IHero {
  hero_id?: number,
  name: string;
  position: string;
  tierlist: string;
  funktion: string;
  glyphs: string;
  artefacts: string;
  skins: string;
  description: string;
}

export type TIERLIST = '-' | 'S+' | 'S' | 'A+' | 'A' |'B' | 'C' | 'D';
export type KLASSEN = '-' |  'Heiler' | 'Kontrolle' | 'Magier' | 'Schütze' | 'Unterstützer' | 'Panzer' | 'Krieger';

export interface IHerolistFilter {
  filtertier: TIERLIST | null;
  filterklasse: KLASSEN | null;
}

export enum IHeroFilterTyp {
  KLASSE = 'klasse',
  TIER = 'tier',
}

export interface IHeroTeam {
  id: number | null;
  name: string;
  description: string;
  pet: string;
  heroes: string[];
  pets: string[];
}

export interface IPrimeNGSelectOption {
  name: string | null;
  code: string | null;
}
export interface ITierlist extends IPrimeNGSelectOption {};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);
  private loginService = inject(LoginService);
  public readonly tierlist = ['-', 'S+','S', 'A+', 'A','B', 'C', 'D'];
  public readonly classes = [
    '-', 'Heiler','Kontrolle','Magier','Schütze','Unterstützer','Panzer','Krieger'
  ];
  public readonly pets = ['Vex','Albus','Axel','Biscuit','Cain','Fenris','Khorus','Mara','Merlin','Oliver'];

  private herolistFilter = new BehaviorSubject<IHerolistFilter>({filtertier: null, filterklasse: null});

  public getPrimeTierlist(): ITierlist[] { return this.tierlist.map(d => { return {name: d, code: d}}); }
  public getPrimeClasses() { return this.classes.map(d => { return {name: d, code: d}}); }

  public setHeroFilter(typ: IHeroFilterTyp, value: string) {
    if (typ === IHeroFilterTyp.KLASSE && this.classes.includes(value)) {
      let actualFilter = this.herolistFilter.value;
      actualFilter.filterklasse = value as KLASSEN;
      this.herolistFilter.next(actualFilter);
    }
    if (typ === IHeroFilterTyp.TIER && this.tierlist.includes(value)) {
      let actualFilter = this.herolistFilter.value;
      actualFilter.filtertier = value as TIERLIST;
      this.herolistFilter.next(actualFilter);
    }
  }

  public setHeroFilters(filter: IHerolistFilter) {
    this.herolistFilter.next(filter);
  }

  public getHeroFilter(): BehaviorSubject<IHerolistFilter> {
    return this.herolistFilter;
  }

  public getHeroNames() {
    return this.http.get<string[]>(this.env.apiUrl + '/heroes.php?heronames=1');
  }

  public getHeroByName(heroName: number, edit: boolean): Observable<IHero> {
    let url = this.env.apiUrl + '/heroes.php?heroByName='+heroName+(edit ? '&edit=1' : '');
    return this.http.get<IHero>(url);
  }

  public sendHero(data: any) {
    return this.http.post(this.env.apiUrl + '/heroes.php?hero_id='+data.hero_id, data);
  }

  public deleteHero(name: string) {
    return this.http.get(this.env.apiUrl + '/heroes.php?deletehero='+encodeURI(name));
  }

  public getHeroNamesFiltered(tier: string, klasse: string) {
    tier = tier === '-' ? '' : tier;
    klasse = klasse === '-' ? '' : klasse;
    let url = this.env.apiUrl + 
      '/heroes.php?filtertier=' + encodeURIComponent(tier) + 
      '&filterklasse=' + encodeURIComponent(klasse);
    return this.http.get<string[]>(url);
  }

  public getHeroTeams() {
    return this.http.get<IHeroTeam[]>(this.env.apiUrl + '/heroes.php?teams=1');
  }

  public getHeroTeam(teamId: number) {
    return this.http.get<IHeroTeam>(this.env.apiUrl + '/heroes.php?team='+teamId);
  }

  public saveHeroTeam(team: IHeroTeam) {
    return this.http.post(this.env.apiUrl + '/heroes.php?saveteam=1', team);
  }

  public deleteTeam(teamId: number|null) {
    return this.http.get(this.env.apiUrl+'/heroes.php?deleteteam='+teamId);
  }

}
