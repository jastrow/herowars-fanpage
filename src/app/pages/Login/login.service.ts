import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { SaveSessionId } from './auth.actions';

export interface ILogin {
  sessionId: string;
  errorMsg: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrlLocal: string = 'http://localhost:8080/api/';
  private apiUrlLive: string = '/api/';

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  public getApiUrl(): string {
    if(window.location.hostname.includes('localhost')) return this.apiUrlLocal;
    return this.apiUrlLive;
  }

  public login(email: string | null, pass: string | null): Observable<ILogin> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', email ?? '');
    body.set('pass', pass ?? '');
    return this.http.post<ILogin>(this.getApiUrl()+'login.php', body.toString(), { headers });
  }

}
