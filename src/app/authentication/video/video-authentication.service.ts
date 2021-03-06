import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as global from './../../globals';
import {ThumbnailModel} from '../../shared/models/thumbnail.model';

@Injectable({
  providedIn: 'root'
})
export class VideoAuthenticationService {

  private currentVideo: ThumbnailModel = null;

  constructor(private http: HttpClient) { }

  saveVideo(name: string, owner: string, title: string, category: string, description: string, video: File, thumbnail: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('owner', owner);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('video', video);
    formData.append('thumbnail', thumbnail);

    return this.http.post(global.saveVideo, formData, {
      headers: new HttpHeaders().set('token', sessionStorage.getItem('token'))
    });
  }

  getVideoStream(path: string): Observable<any> {
    return this.http.get(global.getVideoStream(path));
  }

  getVideosByOwner(num: number): Observable<Array<ThumbnailModel>> {
    return this.http.get<Array<ThumbnailModel>>(global.accountVideos(num));
  }

  getVideosByCategory(category: string): Observable<Array<ThumbnailModel>> {
    return this.http.get<Array<ThumbnailModel>>(global.getVideosByCategory(category));
  }

  getVideosByKeyword(keyword: string): Observable<Array<ThumbnailModel>> {
    return this.http.get<Array<ThumbnailModel>>(global.getVideosByKeyword(keyword.toLowerCase()));
  }

  setCurrentVideo(thumbnail: ThumbnailModel): void { this.currentVideo = thumbnail; }

  getCurrentVideo(): ThumbnailModel { return this.currentVideo; }
}
