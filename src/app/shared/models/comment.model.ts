import {ReplyModel} from './reply.model';

export class CommentModel {

  private _id: string;
  private _author: string;
  private _text: string;
  private _videoID: string;
  private _timestamp: Date;
  private _replies: ReplyModel[];

  get id(): string { return this._id; }
  get author(): string { return this._author; }
  get text(): string { return this._text; }
  get videoID(): string { return this._videoID; }
  get timestamp(): Date { return this._timestamp; }
  get replies(): ReplyModel[] { return this._replies; }

  set id(value: string) { this._id = value; }
  set author(value: string) { this._author = value; }
  set text(value: string) { this._text = value; }
  set videoID(value: string) { this._videoID = value; }
  set timestamp(value: Date) { this._timestamp = value; }
  set replies(value: ReplyModel[]) { this._replies = value; }
}
