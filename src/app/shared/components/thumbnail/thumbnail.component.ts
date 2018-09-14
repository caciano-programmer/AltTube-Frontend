import {Component, Input, OnInit} from '@angular/core';
import {ThumbnailModel} from '../../models/thumbnail.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent {

  @Input('thumbnail') thumbnail: ThumbnailModel;

  navigateVideo(): void {
    // navigate to link video/{thumbnail.owner}
  }
}
