import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {

  file: File = null;
  disabled: boolean = false;

  profileForm = this.formBuilder.group({
    description:  ['', Validators.compose([Validators.minLength(2), Validators.maxLength(600)])],
    age: ['', Validators.pattern(/^[1-9][0-9]?$|^1[0-1][0-9]$|^120$/)],
    gender: ['', Validators.pattern(/M|F/)]
  });

  constructor(private formBuilder: FormBuilder, private auth: AccountAuthenticationService, private router: Router) { }

  edit() {
    this.profileForm.reset();
    this.file = null;
  }

  fileGet(event) { this.file = event.target.files[0]; }

  submit() {
    this.disabled = true;
    const description: string = this.profileForm.value.description;
    const age: string = this.profileForm.value.age;
    const gender: string = this.profileForm.value.gender;

    if (description !== null || age !== null || gender !== null || this.file !== null)
      this.auth.update(gender, description, age, this.file).subscribe(data => {
        const object: Object = JSON.parse(JSON.stringify(data));
        if (object['status'] !== null && object['status'] === 'successful')
          this.router.navigate([`/account/${this.auth.getID()}`]);
      }, error => { if (error !== null) this.auth.logout(true); });

    this.disabled = false;
    this.edit();
  }
}
