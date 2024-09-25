import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from '../Auth/login.service';
import { ENVIRONMENT } from '@lib/util/tokens';

export interface Ititan {
  titan_id?: number,
  name: string;
  position: string;
  tierlist: string;
  funktion: string;
  description: string;
}

export type TIERLIST = '-' | 'S+' | 'S' | 'A+' | 'A' |'B' | 'C' | 'D';
export type KLASSEN = '-' |  'Magier' | 'Scharfschütze' | 'Unterstützer' | 'Tank';

export interface ITitanlistFilter {
  filtertier: TIERLIST | null;
  filterklasse: KLASSEN | null;
}

export enum ItitanFilterTyp {
  KLASSE = 'klasse',
  TIER = 'tier',
}

export interface ItitanTeam {
  id: number | null;
  name: string;
  description: string;
  titans: string[];
}


@Injectable({
  providedIn: 'root'
})
export class TitanService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);
  private loginService = inject(LoginService);
  public readonly tierlist = ['-', 'S+','S', 'A+', 'A','B', 'C', 'D'];
  public readonly classes = [
    '-', 'Magier','Scharfschütze','Unterstützer','Tank'
  ];

  private titanlistFilter = new BehaviorSubject<ITitanlistFilter>({filtertier: null, filterklasse: null});

  public setTitanFilter(typ: ItitanFilterTyp, value: string) {
    if (typ === ItitanFilterTyp.KLASSE && this.classes.includes(value)) {
      let actualFilter = this.titanlistFilter.value;
      actualFilter.filterklasse = value as KLASSEN;
      this.titanlistFilter.next(actualFilter);
    }
    if (typ === ItitanFilterTyp.TIER && this.tierlist.includes(value)) {
      let actualFilter = this.titanlistFilter.value;
      actualFilter.filtertier = value as TIERLIST;
      this.titanlistFilter.next(actualFilter);
    }
  }

  public setTitanFilters(filter: ITitanlistFilter) {
    this.titanlistFilter.next(filter);
  }

  public getTitanFilter(): BehaviorSubject<ITitanlistFilter> {
    return this.titanlistFilter;
  }

  public getTitanNames() {
    return this.http.get<string[]>(this.env.apiUrl + '/titans.php?titannames=1');
  }

  public getTitanByName(titanName: number, edit: boolean): Observable<Ititan> {
    let url = this.env.apiUrl + '/titans.php?titanByName='+titanName+(edit ? '&edit=1' : '');
    return this.http.get<Ititan>(url);
  }

  public sendTitan(data: any) {
    return this.http.post(this.env.apiUrl + '/titans.php?titan_id='+data.titan_id, data);
  }

  public deleteTitan(name: string) {
    return this.http.get(this.env.apiUrl + '/titans.php?deletetitan='+encodeURI(name));
  }

  public getTitanNamesFiltered(tier: string, klasse: string) {
    tier = tier === '-' ? '' : tier;
    klasse = klasse === '-' ? '' : klasse;
    let url = this.env.apiUrl + 
      '/titans.php?filtertier=' + encodeURIComponent(tier) + 
      '&filterklasse=' + encodeURIComponent(klasse);
    return this.http.get<string[]>(url);
  }

  public getTitanTeams() {
    return this.http.get<ItitanTeam[]>(this.env.apiUrl + '/titans.php?teams=1');
  }

  public getTitanTeam(teamId: number) {
    return this.http.get<ItitanTeam>(this.env.apiUrl + '/titans.php?team='+teamId);
  }

  public saveTitanTeam(team: ItitanTeam) {
    return this.http.post(this.env.apiUrl + '/titans.php?saveteam=1', team);
  }

  public deleteTeam(teamId: number|null) {
    return this.http.get(this.env.apiUrl+'/titans.php?deleteteam='+teamId);
  }

}
