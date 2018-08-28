import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.create('caciano', 'caciano18@yahoo.com', 'password').subscribe(
      () => console.log('started'),
      error => console.log(error),
      () => this.authService.update('M', 'beast', '2').subscribe()
    );
  }
}
