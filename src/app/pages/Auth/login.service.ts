import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '@lib/util/tokens';
import { Observable, of } from 'rxjs';

export interface ILogin {
  sessionId: string;
  errorMsg: string;
}

export interface IStatus {
  status: string;
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

  public logout(): Observable<any> {
    return this.http.get<any>(this.env.apiUrl+'/login.php?logout=1');
  }

  public passwordRecover(email: string) {
    return this.http.get<IStatus>(this.env.apiUrl+'/login.php?recover='+encodeURIComponent(email));
  }

  public changePassword(password: string, token: string) {
    return this.http.get<IStatus>(
      this.env.apiUrl+'/login.php?'+
        'changepassword='+encodeURIComponent(password)+'&'+
        'token='+encodeURIComponent(token)
    );
  }

  public getMyData() {
    return this.http.get<any>(this.env.apiUrl+'/login.php?mydata=1');
  }
  public setMyData(data: any) {
    return this.http.post<any>(this.env.apiUrl+'/login.php?setmydata=1', data);
  }
}
