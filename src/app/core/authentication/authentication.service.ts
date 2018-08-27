import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as global from './../../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

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

  logout(): Observable<any> { return this.http.get(global.logoutUrl); }
}
