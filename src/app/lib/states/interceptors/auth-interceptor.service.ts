// auth-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private token: string = '';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth$.subscribe(t => { 
      if(t) { this.token = t; }
    });
    

    if (this.token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
