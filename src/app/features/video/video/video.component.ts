import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {CommentModel} from '../../../shared/models/comment.model';
import {CommentAuthenticationService} from '../../../authentication/comment/comment-authentication.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  moreImg: string = 'show-more.png';
  lessImg: string = 'less.png';
  option: string = this.moreImg;
  thumbnail: ThumbnailModel = null;
  ownerUrl: string;
  videoSrc: string;
  showLiveChat: boolean = false;
  showComments: boolean = false;
  comments: CommentModel[] = [];

  constructor(private vidAuth: VideoAuthenticationService, private route: ActivatedRoute, private router: Router,
              private accAuth: AccountAuthenticationService, private commentAuth: CommentAuthenticationService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => this.ownerUrl = params['id'] ? `/account/${params['id']}` : '',
      () => this.accAuth.logout());
    this.thumbnail = this.vidAuth.getCurrentVideo();
    this.thumbnail == null ? this.router.navigate(['/']) : this.videoSrc = `http://localhost:8081/video/stream/${this.thumbnail.vidRef}`;
    this.commentAuth.getComments(this.thumbnail.id).subscribe(result => this.comments = result);
  }

  showMore(): void { this.option = this.option === this.moreImg ? this.lessImg : this.moreImg; }

  viewComments(): void {
    this.showLiveChat = false;
    this.showComments = !this.showComments;
  }

  viewLiveChat(): void {
    this.showComments = false;
    this.showLiveChat = !this.showLiveChat;
  }
}
