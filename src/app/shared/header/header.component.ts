import {Component, OnInit} from '@angular/core';
import {AccountAuthenticationService} from '../../authentication/account/account-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AccountAuthenticationService) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(
      data => this.isLoggedIn = data,
      error => console.log(error)
    );
  }

  logout(): void {
    this.authService.logout();
  }

}
