import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import * as global from './../../globals';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor {

  constructor(private http: HttpClient) { }

  create(name: string, email: string, password: string): Observable<any> {

    const encodedBasicAuth: string = 'Basic ' + btoa(`${email}:${password}`);
    const body = new URLSearchParams(`name=${name}`).toString();

    return this.http.post(global.createAccountUrl, body, {
      headers: new HttpHeaders().append('Authorization', encodedBasicAuth).set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  login(email: string, password: string): Observable<any> {

    const encodedBasicAuth: string = 'Basic ' + btoa(`${email}:${password}`);

    return this.http.post(global.loginUrl, null, {
      headers: new HttpHeaders().append('Authorization', encodedBasicAuth).set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  logout(): Observable<any> {
    window.sessionStorage.clear();
    return this.http.get(global.logoutUrl);
  }

  update(gender?: string, description?: string, age?: string, image?: File): Observable<any> {
    if (name !== null || gender !== null || age !== null || description !== null || image !== null
      && window.sessionStorage.getItem('token') !== null ) {

      const formData: FormData = new FormData();
      if (gender !== null) formData.append('gender', gender);
      if (age !== null) formData.append('age', age);
      if (description !== null) formData.append('description', description);
      if (image !== null) formData.append('image', image);

      return this.http.post(global.updateAccount, formData, {
        headers: new HttpHeaders().set('token', window.sessionStorage.getItem('token'))
      });
    }

    return EMPTY;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({withCredentials: true});

    return next.handle(clone).pipe( tap(event => {
      if (event instanceof HttpResponse)
        window.sessionStorage.setItem('token', event.headers.get('token'));
    }));
  }
}
