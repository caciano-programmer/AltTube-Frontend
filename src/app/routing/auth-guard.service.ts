import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AccountAuthenticationService} from '../authentication/account/account-authentication.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AccountAuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(data => {
        if (!data) this.router.navigate(['login']);
        return data;
      })
    );
  }
}
