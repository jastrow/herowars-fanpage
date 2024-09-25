import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '@lib/util/tokens';
import environment from 'src/environment';

export interface IMember {
  id?: number;
  name: string;
  info: string;
}

export interface IGK {
  id?: number;
  name: string;
  info: string;
  gk_id: number;
  mitglied_id: number;
  year: number;
  week: number;
  montag: boolean;
  dienstag: boolean;
  mittwoch: boolean;
  donnerstag: boolean;
  freitag: boolean;
  samstag: boolean;
  sonntag: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GildenkriegService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);
  private url;

  constructor() {
    this.url = this.env.apiUrl + '/gildenkrieg.php?';
  }

  getMembers() {
    return this.http.get<IMember[]>(this.url + 'members=1');
  }

  addMember(member: IMember) {
    return this.http.post<IMember>(this.url + 'addmember=1', member);
  }

  editMember(member: IMember) {
    return this.http.post<IMember>(this.url + 'editmember=1', member);
  }

  getWeek(week: number | null, year: number | null) {
    let params = new URLSearchParams();
    params.append('getWeek', '1');
    if(week) { params.append('week', week+''); }
    if(year) { params.append('year', year+''); }
    return this.http.get<IGK>(this.url + params.toString());
  }

  setStatus(day: string, memberId: number | undefined) {
    return this.http.get<any>(this.url+'day='+day+'&memberid='+memberId+'&setaktiv=1');
  }


}
