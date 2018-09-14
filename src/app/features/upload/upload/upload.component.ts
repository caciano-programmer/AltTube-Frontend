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
  message: string = '';
  showMsg: boolean = false;

  constructor(private vidAuth: VideoAuthenticationService, private accAuth: AccountAuthenticationService, private router: Router) { }

  videoGet(event): void { this.videoFile = event.target.files[0]; }

  imageGet(event): void { this.thumbnailFile = event.target.files[0]; }

  submit(form: NgForm): void {
    this.vidAuth.saveVideo(this.accAuth.getName(), this.accAuth.getID(), form.value.title, form.value.category, form.value.description,
      this.videoFile, this.thumbnailFile).subscribe(data => {
      const object: Object = JSON.parse(JSON.stringify(data));
      if (object['status'] !== null && object['status'] === 'successful')
        this.accAuth.isLoggedIn() ? this.router.navigate(['/account']) : this.router.navigate(['/']);
    }, error => {
        this.showMsg = true;
        this.message = error['error']['message'];
    });
  }
}