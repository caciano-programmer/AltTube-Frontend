import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccountAuthenticationService} from '../../authentication/account/account-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isUpdating: boolean = false;
  imageSrc: string = '/assets/images/account-icon.png';

  name: string = 'Caciano';
  description: string = `User ${this.fixName(this.name)} has not provided a description yet.`;
  age: number;
  gender: string;
  file: File;

  profileForm = this.formBuilder.group({
    description:  ['', Validators.compose([Validators.minLength(2), Validators.maxLength(600)])],
    age: ['', Validators.pattern(/^[1-9][0-9]?$|^1[0-1][0-9]$|^120$/)],
    gender: ['', Validators.pattern(/M|F/)]
  });

  constructor(private formBuilder: FormBuilder, private auth: AccountAuthenticationService, private router: Router) {}

  ngOnInit() {console.log('Called from init');}

  fixName(string: string): string {
    return string.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substr(1)).join(' ');
  }

  edit() {
    this.isUpdating = !this.isUpdating;
    this.profileForm.reset();
    this.file = null;
  }

  fileGet(event) { this.file = event.target.files[0]; }

  submit() {
    const description: string = this.profileForm.value.description;
    const age: string = this.profileForm.value.age;
    const gender: string = this.profileForm.value.gender;

    if (description !== null || age !== null || gender !== null || this.file !== null)
      this.auth.update(gender, description, age, this.file).subscribe(data => {
        const object: Object = JSON.parse(JSON.stringify(data));
        if (object['status'] !== null && object['status'] === 'successful') {
          this.edit();
          this.setDetails(gender, age, description);
        }
      }, error => {
        if (error !== null) {
          this.router.navigate(['/login']);
        }});
    else
      this.edit();
  }

  private setDetails(gender: string, age: string, description: string) {
    if (gender !== null) this.gender = gender;
    if (age !== null) this.age = Number(age);
    if (description !== null) this.description = description;
  }
}
