import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentModel} from '../../shared/models/comment.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as global from './../../globals';
import {ReplyModel} from '../../shared/models/reply.model';

@Injectable({
  providedIn: 'root'
})
export class CommentAuthenticationService {

  constructor(private http: HttpClient) {}

  saveComment(text: string, author: string, videoID: string): Observable<CommentModel> {
    return this.http.post<CommentModel>(global.saveComment, {text: text, author: author, videoID: videoID}, {
      headers: new HttpHeaders().set('token', sessionStorage.getItem('token'))
    });
  }

  getComments(id: string): Observable<Array<CommentModel>> {
    return this.http.get<Array<CommentModel>>(global.getCommentsFunction(id));
  }

  saveReply(author: string, text: string, commentId: string): Observable<ReplyModel> {
    return this.http.post<ReplyModel>(global.saveCommentReply, {text: text, author: author, commentRef: commentId}, {
      headers: new HttpHeaders().set('token', sessionStorage.getItem('token'))
    });
  }
}
