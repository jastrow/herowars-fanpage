import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '@lib/util/tokens';
import { Observable, of } from 'rxjs';

export interface ILogin {
  sessionId: string;
  errorMsg: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);

  public login(email: string | null, pass: string | null): Observable<ILogin> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', email ?? '');
    body.set('pass', pass ?? '');
    return this.http.post<ILogin>(this.env.apiUrl+'/login.php', body.toString(), { headers });
  }

}
