import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  thumbnails: ThumbnailModel[] = null;

  constructor(private vidAuth: VideoAuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param['category'] !== undefined)
        this.vidAuth.getVideosByCategory(param['category']).subscribe(
          (result) => result.length > 0 ? this.thumbnails = result : this.thumbnails = null);
      else
        this.vidAuth.getVideosByKeyword(param['keyword']).subscribe(
          (result) => result.length > 0 ? this.thumbnails = result : this.thumbnails = null);
    });
  }
}
