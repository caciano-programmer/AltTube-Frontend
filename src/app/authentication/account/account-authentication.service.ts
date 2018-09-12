import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';
import * as global from './../../globals';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountAuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(this.initToken());

  constructor(private http: HttpClient, private router: Router) { }

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

  logout(login?: boolean): Observable<any> {
    sessionStorage.clear();
    login ? this.router.navigate(['/login']) : this.router.navigate(['/']);
    this.loggedIn.next(false);
    return this.http.get(global.logoutUrl);
  }

  getProfile(): Observable<any> { return this.http.get(global.getProfile, { headers: new HttpHeaders().set('token', sessionStorage.getItem('token')) }); }

  update(gender?: string, description?: string, age?: string, file?: File): Observable<any> {
    if ( gender !== null || age !== null || description !== null || file !== null
      && sessionStorage.getItem('token') !== null ) {

      const formData: FormData = new FormData();
      if (gender !== null) formData.append('gender', gender);
      if (age !== null) formData.append('age', age);
      if (description !== null) formData.append('description', description);
      if (file !== null) formData.append('file', file);

      return this.http.post(global.updateAccount, formData, {
        headers: new HttpHeaders().set('token', sessionStorage.getItem('token'))
      });
    }

    return EMPTY;
  }

  setName(name: string): void { sessionStorage.setItem('name', name); }

  getName(): string { return sessionStorage.getItem('name'); }

  isLoggedIn(): BehaviorSubject<boolean> { return this.loggedIn; }

  private initToken(): boolean { return sessionStorage.getItem('token') ? true : false; }
}
