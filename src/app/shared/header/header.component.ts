import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthenticationService) {}

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
