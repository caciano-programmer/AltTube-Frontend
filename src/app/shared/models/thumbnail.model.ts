export class ThumbnailModel {

  private _imageBytes: string;
  private _title: string;
  private _category: string;
  private _owner: string;
  private _name: string;

  set imageBytes(value: string) { this._imageBytes = value; }
  set title(value: string) { this._title = value; }
  set category(value: string) { this._category = value; }
  set owner(value: string) { this._owner = value; }
  set name(value: string) { this._name = value; }

  get name(): string { return this._name; }
  get imageBytes(): string { return this._imageBytes; }
  get title(): string { return this._title; }
  get category(): string { return this._category; }
  get owner(): string { return this._owner; }
}
