import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as global from './../../globals';

@Injectable({
  providedIn: 'root'
})
export class VideoAuthenticationService {

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

  getVideos(category: string): Observable<any> {
    return this.http.get(global.getVideosByCategory(category));
  }
}
