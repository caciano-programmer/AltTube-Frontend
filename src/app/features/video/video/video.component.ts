import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  thumbnail: ThumbnailModel = null;
  ownerUrl: string;
  videoSrc: string;

  constructor(private vidAuth: VideoAuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.ownerUrl = params['id'] ? `/account/${params['id']}` : '');
    this.thumbnail = this.vidAuth.getCurrentVideo();
    this.thumbnail == null ? this.router.navigate(['/']) : this.videoSrc = `http://localhost:8081/video/stream/${this.thumbnail.vidRef}`;
  }

  showMore(): void {

  }

  viewComments(): void {

  }

  viewLiveChat(): void {

  }
}
