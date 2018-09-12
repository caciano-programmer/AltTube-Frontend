import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  viewComments(): void {

  }

  viewLiveChat(): void {

  }

  showMore(): void {

  }
}
