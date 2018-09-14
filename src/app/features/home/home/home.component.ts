import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categories: string[] = [
    'EDUCATIONAL',
    'SPORTS',
    'MUSIC',
    'OUTDOORS',
    'ENTERTAINMENT',
    'ARTISTIC',
    'ANIMATION',
    'MISCELLANEOUS'];

  search(query: string) {

  }
}
