import { Component, OnInit } from '@angular/core';
import {VideoAuthenticationService} from '../../../authentication/video/video-authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThumbnailModel} from '../../../shared/models/thumbnail.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  thumbnails: ThumbnailModel[] = [];
  loading: boolean = true;

  constructor(private vidAuth: VideoAuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param['category'] !== undefined)
        this.vidAuth.getVideosByCategory(param['category']).subscribe(
          (result) => {
            console.log(result);
            this.thumbnails = result;
            this.loading = false;
          });
      else
        this.vidAuth.getVideosByKeyword(param['keyword']).subscribe(
          (result) => {
            this.thumbnails = result;
            this.loading = false;
          });
    });
  }
}
