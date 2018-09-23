import {AfterViewChecked, Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentAuthenticationService} from '../../../authentication/comment/comment-authentication.service';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';
import {CommentModel} from '../../../shared/models/comment.model';
import {ReplyModel} from '../../../shared/models/reply.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements AfterViewChecked {

  @Input('name') name: string;
  @Input('vidID') vidID: string;
  @Input('comments') comments: CommentModel[];

  commentText: string;
  replyText: string;
  isReplying: boolean = false;
  isViewingReplies: boolean = false;
  currentCommentId: string;
  commentsLoaded: boolean = false;

  constructor(private commentAuth: CommentAuthenticationService, private accAuth: AccountAuthenticationService) {}

  ngAfterViewChecked() { this.commentsLoaded = true; }

  scrollTo(div: HTMLDivElement) { div.scrollIntoView(); }

  enforceLoggedIn(textArea: HTMLTextAreaElement): void {
    this.accAuth.isLoggedIn().subscribe(data => data ? textArea.setCustomValidity('') : textArea.setCustomValidity('Must be logged in.'));
  }

  viewReply(commentID: string) {
    this.isViewingReplies = this.isViewingReplies === true && commentID !== this.currentCommentId ? true : this.isViewingReplies === true ? false : true;
    this.currentCommentId = commentID;
    this.isReplying = false;
  }

  postingReply(commentID: string) {
    this.isReplying = this.isReplying === true && commentID !== this.currentCommentId ? true : this.isReplying === true ? false : true;
    this.currentCommentId = commentID;
    this.isViewingReplies = false;
  }

  viewOrHideReplies(id: string) { return id === this.currentCommentId && this.isViewingReplies ? 'Hide' : 'View'; }

  clear() { this.isViewingReplies = this.isReplying = false; }

  submitReply(id: string, index: number) {
    this.commentAuth.saveReply(this.name, this.replyText, id).subscribe(response => {
      if (response != null)
        this.comments[index].replies.unshift(response);
    }, () => this.accAuth.logout());
    this.replyText = '';
    this.clear();
  }

  post(form: NgForm): void {
    this.commentAuth.saveComment(this.commentText, this.name, this.vidID).subscribe(response => {
        if (response != null)
          this.comments.unshift(response);
    }, () => this.accAuth.logout());
    form.reset();
  }
}
