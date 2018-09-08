import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({withCredentials: true});

    return next.handle(clone).pipe( tap(event => {
      if (event instanceof HttpResponse)
        if (!sessionStorage.getItem('token'))
          sessionStorage.setItem('token', event.headers.get('token'));
    }));
  }
}
