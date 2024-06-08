// auth-interceptor.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SaveSessionId } from '@lib/states/auth/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  @Select((state: { auth: any; }) => state.auth.sessionId) auth$!: Observable<string|null>;
  private store = inject(Store);
  private router = inject(Router);

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let useReq = req;

    // Sendet immer Bearer Token mit, wenn Auth
    this.auth$.subscribe(t => { 
      if(t) {
        useReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${t}`
          }
        });
      }
    });

    // Prüft ob der Response 401 (Unautherized) ist, und macht einen Logout
    return next.handle(useReq).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.store.dispatch(new SaveSessionId(null));
          this.router.navigate(['/']);
        }
        return throwError(() => new Error(error.message));
      })
    );
}
}
