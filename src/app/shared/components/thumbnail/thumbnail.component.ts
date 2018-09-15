import {Component, Input, OnInit} from '@angular/core';
import {ThumbnailModel} from '../../models/thumbnail.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent {

  @Input('thumbnail') thumbnail: ThumbnailModel;

  constructor(private router: Router) {}

  getImageSrc(src: string): string { return `data:image/jpg;base64,${atob(src)}`; }

  navigateVideo(): void { this.router.navigate([`/video/${this.thumbnail.owner}`]); }
}

