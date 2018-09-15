import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {Router} from '@angular/router';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isUpdating: boolean = false;
  imageSrc: string = '/assets/images/account-icon.png';

  name: string = '';
  description: string = `User has not provided a description yet.`;
  age: number;
  gender: string;
  file: File = null;

  thumbnails: ThumbnailModel[];

  profileForm = this.formBuilder.group({
    description:  ['', Validators.compose([Validators.minLength(2), Validators.maxLength(600)])],
    age: ['', Validators.pattern(/^[1-9][0-9]?$|^1[0-1][0-9]$|^120$/)],
    gender: ['', Validators.pattern(/M|F/)]
  });

  constructor(private formBuilder: FormBuilder, private auth: AccountAuthenticationService, private vidAuth: VideoAuthenticationService) {}

  ngOnInit() {
    this.vidAuth.getVideosByOwner(Number(this.auth.getID())).subscribe(
      data => this.thumbnails = data.length > 0 ? data : null);
    this.name = this.auth.getName();
    this.description = `User ${this.fixName(this.name)} has not provided a description yet.`;
    this.retrieveProfile();
  }

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
          this.file == null ? this.setDetails(gender, age, description) : this.retrieveProfile();
          this.edit();
        }
      }, error => { if (error !== null) this.auth.logout(true); });
    else
      this.edit();
  }

  private setDetails(gender: string, age: string, description: string) {
    if (gender !== null) this.gender = gender;
    if (age !== null) this.age = Number(age);
    if (description !== null) this.description = description;
  }

  private retrieveProfile() {
    this.auth.getProfile().subscribe(data => {
      if (data !== null) {
        if (data['age']) this.age = Number(data['age']);
        if (data['gender']) this.gender = data['gender'];
        if (data['description']) this.description = data['description'];
        if (data['image']) this.imageSrc = `data:image/jpg;base64,${atob(data['image'])}`;
      }
    });
  }
}
