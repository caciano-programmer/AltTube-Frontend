export class ThumbnailModel {

  private _image: string;
  private _title: string;
  private _category: string;
  private _owner: string;
  private _name: string;
  private _date: Date;
  private _id: number;
  private _vidRef: string;
  private _description: string;

  set id(value: number) { this._id = value; }
  set date(value: Date) { this._date = value; }
  set image(value: string) { this._image = value; }
  set title(value: string) { this._title = value; }
  set category(value: string) { this._category = value; }
  set owner(value: string) { this._owner = value; }
  set name(value: string) { this._name = value; }
  set vidRef(value: string) { this._vidRef = value; }
  set description(value: string) { this._description = value; }

  get id(): number { return this._id; }
  get date(): Date { return this._date; }
  get name(): string { return this._name; }
  get title(): string { return this._title; }
  get category(): string { return this._category; }
  get owner(): string { return this._owner; }
  get image(): string { return this._image; }
  get vidRef(): string { return this._vidRef; }
  get description(): string { return this._description; }
}
