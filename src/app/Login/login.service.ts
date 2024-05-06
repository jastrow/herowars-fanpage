import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { SaveSessionId } from './auth.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl: string = 'http://localhost:8080/api/login.php';

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  public login(email: string | null, pass: string | null) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', email ?? '');
    body.set('pass', pass ?? '');
    return this.http.post(this.loginUrl, body.toString(), { headers });
  }

}
