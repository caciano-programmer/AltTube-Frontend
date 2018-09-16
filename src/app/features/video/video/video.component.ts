import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute} from '@angular/router';

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
  ownerUrl: string;

  constructor(private vidAuth: VideoAuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => params['id'] ? this.ownerUrl = `/account/${params['id']}` : '');
  }

  viewComments(): void {

  }

  viewLiveChat(): void {

  }

  showMore(): void {

  }
}
