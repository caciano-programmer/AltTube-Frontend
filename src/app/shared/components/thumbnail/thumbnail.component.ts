import {Component, Input, OnInit} from '@angular/core';
import {ThumbnailModel} from '../../models/thumbnail.model';
import {Router} from '@angular/router';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent {

  @Input('thumbnail') thumbnail: ThumbnailModel;

  constructor(private router: Router, private vidAuth: VideoAuthenticationService) {}

  getImageSrc(src: string): string { return `data:image/jpg;base64,${atob(src)}`; }

  navigateVideo(): void {
    this.vidAuth.setCurrentVideo(this.thumbnail);
    this.router.navigate([`/video/${this.thumbnail.owner}`]);
  }
}

