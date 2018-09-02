import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {BehaviorSubject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  confirm: string;

  errorPresent: boolean = false;
  error: string;
  newUser: boolean = false;
  Header: string = 'Login';
  userBtn: string = 'Create Account?';
  Subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.newUser);

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.Subject.subscribe(
      data => data === true ? (this.userBtn = 'Already Member?', this.Header = 'Create') :
        (this.userBtn = 'Create Account?', this.Header = 'Login'));
  }

  NewUser() {
    this.errorPresent = false;
    this.newUser = !this.newUser;
    this.Subject.next(this.newUser);
  }

  customValidity(input: HTMLInputElement) {
    this.password !== this.confirm ? input.setCustomValidity('Field must equal password field.') : input.setCustomValidity('');
  }

  submit(form: NgForm): void {
    if (this.newUser) {
      this.authService.create(form.value.name, form.value.email, form.value.password).subscribe(data => {
        const object: Object = JSON.parse(JSON.stringify(data));
        if (object['status'] !== null && object['status'] === 'successful') {
          console.log('works');
          this.authService.isLoggedIn().next(true);
          this.router.navigate(['/home']);
        }
      }, error => {
        if (error !== null)
          this.errorPresent = true;
        console.log(error);
      });
    }

    if (!this.newUser) {
      this.authService.login(form.value.email, form.value.password).subscribe(data => {
        const object: Object = JSON.parse(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)))
        if (object['status'] !== null && object['status'] === 'successful') {
          this.authService.isLoggedIn().next(true);
          this.router.navigate(['/home']);
        }
      }, error => {
        if (error !== null) {
          this.errorPresent = true;
          this.error = error['error']['message'];
        }
      });
    }
  }
}
