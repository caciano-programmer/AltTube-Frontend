import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isLoggingIn: boolean = false;
  imageSrc: string = '/assets/images/account-icon.png';

  name: string = 'caciano almeida';
  description: string = `User ${this.fixName(this.name)} has not provided a description yet.`;
  age: number;
  gender: string;

  profileForm = this.formBuilder.group({
    description:  ['', Validators.compose([Validators.minLength(2), Validators.maxLength(600)])],
    age: ['', Validators.pattern(/^[1-9][0-9]?$|^1[0-1][0-9]$|^120$/)],
    gender: ['', Validators.pattern(/M|F/)]
  });

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) {}

  ngOnInit() {
  }

  fixName(string: string): string {
    return string.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substr(1)).join(' ');
  }

  edit() {
    this.isLoggingIn = !this.isLoggingIn;
    this.profileForm.reset();
  }

  submit() {
    const description: string = this.profileForm.value.description;
    const age: string = this.profileForm.value.age;
    const gender: string = this.profileForm.value.gender;

    if (description !== null || age !== null || gender !== null)
      this.auth.update(gender, description, age).subscribe();
    else
      this.isLoggingIn = !this.isLoggingIn;
  }
}
