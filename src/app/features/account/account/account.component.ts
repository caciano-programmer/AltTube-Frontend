import { Component, OnInit } from '@angular/core';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  imageSrc: string = '/assets/images/account-icon.png';
  name: string = '';
  description: string = `User has not provided a description yet.`;
  age: number;
  gender: string;
  thumbnails: ThumbnailModel[];

  isEditable: boolean = false;

  constructor(private auth: AccountAuthenticationService, private vidAuth: VideoAuthenticationService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.isEditable = (params['id'] !== undefined && params['id'] === this.auth.getID()) ? true : false;
      this.retrieveProfile(params['id']);
      if (params['id'])
        this.vidAuth.getVideosByOwner(params['id']).subscribe(data => this.thumbnails = data.length > 0 ? data : null);
    });
  }

  fixName(string: string): string {
    return string.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substr(1)).join(' ');
  }

  private retrieveProfile(id: string) {
    this.auth.getProfile(id).subscribe(data => {
      if (data !== null) {

        this.name = data['name'];
        this.description = `User ${this.fixName(this.name)} has not provided a description yet.`;

        if (data['age']) this.age = Number(data['age']);
        if (data['gender']) this.gender = data['gender'];
        if (data['description']) this.description = data['description'];
        if (data['image']) this.imageSrc = `data:image/jpg;base64,${atob(data['image'])}`;
      }
    });
  }
}
