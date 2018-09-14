import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoSrc: string;
  title: string = 'Test title';
  owner: string = 'test owner';
  description: string = 'test description';

  constructor(private vidAuth: VideoAuthenticationService) { }

  ngOnInit() {

  }

  viewComments(): void {

  }

  viewLiveChat(): void {

  }

  showMore(): void {

  }
}
