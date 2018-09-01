import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    // this.authService.create('caciano', 'caciano18@yahoo.com', 'almeida').subscribe(
    //   data => {
    //     const obj: Object = JSON.parse(JSON.stringify(data));
    //     if (obj['status'] !== null && obj['status'] === 'successful')
    //       this.authService.isLoggedIn().next(true);
    //   },
    //   error => console.log(error)
    // );
  }
}
