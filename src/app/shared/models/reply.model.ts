export class ReplyModel {

  private _commentRef: string;
  private _author: string;
  private _text: string;
  private _timestamp: Date;


  get commentRef(): string { return this._commentRef; }
  get author(): string { return this._author; }
  get text(): string { return this._text; }
  get timestamp(): Date { return this._timestamp; }

  set commentRef(value: string) { this._commentRef = value; }
  set author(value: string) { this._author = value; }
  set text(value: string) { this._text = value; }
  set timestamp(value: Date) { this._timestamp = value; }
}
