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
  private loginUrl: string = 'http://localhost:8080/api/login.php';

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  public login(email: string | null, pass: string | null): Observable<ILogin> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', email ?? '');
    body.set('pass', pass ?? '');
    return this.http.post<ILogin>(this.loginUrl, body.toString(), { headers });
  }

}
