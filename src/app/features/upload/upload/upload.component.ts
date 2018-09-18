import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Categories} from '../../../shared/models/category.model';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  categoryArray: string[] = Categories;
  videoFile: File = null;
  thumbnailFile: File = null;
  title: string = '';
  category: string = '';
  description: string = '';
  message: string = 'Loading please wait...';
  disabled: boolean = false;
  loading: boolean = true;

  constructor(private vidAuth: VideoAuthenticationService, private accAuth: AccountAuthenticationService, private router: Router) { }

  videoGet(event, input: HTMLInputElement): void {
    this.videoFile = event.target.files[0];
    const type: string = event.target.files[0].type;

    if (event.target.files[0] != null && type !== 'video/mp4' && type !== 'video/webm' && type !== 'video/ogg')
      input.setCustomValidity('Video file type must equal one of the following: mp4, webm, ogg');
    else
      input.setCustomValidity('');
  }

  imageGet(event): void { this.thumbnailFile = event.target.files[0]; }

  submit(form: NgForm): void {
    this.disabled = this.loading = true;
    this.vidAuth.saveVideo(this.accAuth.getName(), this.accAuth.getID(), form.value.title, form.value.category, form.value.description,
      this.videoFile, this.thumbnailFile).subscribe(data => {
      const object: Object = JSON.parse(JSON.stringify(data));
      if (object['status'] !== null && object['status'] === 'successful')
        this.accAuth.isLoggedIn() ? this.router.navigate([`/account/${this.accAuth.getID()}`]) : this.router.navigate(['/']);
    }, error => {
        this.loading = false;
        this.message = error['error']['message'];
        if (this.message === 'Login credentials are in improper form, please try to login again.')
          this.accAuth.logout(false);
    });
  }
}
