import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginService } from '../Login/login.service';

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
  heroes: string[];
}


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);
  private loginService = inject(LoginService);
  public readonly tierlist = ['-', 'S+','S', 'A+', 'A','B', 'C', 'D'];
  public readonly classes = [
    '-', 'Heiler','Kontrolle','Magier','Schütze','Unterstützer','Panzer','Krieger'
  ];
  private url: string = '';

  private herolistFilter = new BehaviorSubject<IHerolistFilter>({filtertier: null, filterklasse: null});

  constructor() {
    this.url = this.loginService.getApiUrl();
   }

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
    return this.http.get<string[]>(this.url + 'heroes.php?heronames=1');
  }

  public getHeroByName(heroName: number, edit: boolean): Observable<IHero> {
    let url = this.url + 'heroes.php?heroByName='+heroName+(edit ? '&edit=1' : '');
    return this.http.get<IHero>(url);
  }

  public sendHero(data: any) {
    return this.http.post(this.url + 'heroes.php?hero_id='+data.hero_id, data);
  }

  public deleteHero(name: string) {
    return this.http.get(this.url + 'heroes.php?deletehero='+encodeURI(name));
  }

  public getHeroNamesFiltered(tier: string, klasse: string) {
    tier = tier === '-' ? '' : tier;
    klasse = klasse === '-' ? '' : klasse;
    return this.http.get<string[]>(
      this.url + 'heroes.php?filtertier='+encodeURI(tier)+'&filterklasse='+encodeURI(klasse)
    );
  }

  public getHeroTeams() {
    return this.http.get<IHeroTeam[]>(this.url + 'heroes.php?teams=1');
  }

  public getHeroTeam(teamId: number) {
    return this.http.get<IHeroTeam>(this.url + 'heroes.php?team='+teamId);
  }

  public saveHeroTeam(team: IHeroTeam) {
    return this.http.post(this.url + 'heroes.php?saveteam=1', team);
  }

  public deleteTeam(teamId: number|null) {
    return this.http.get(this.url+'heroes.php?deleteteam='+teamId);
  }

}
