import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: string[] = [
    'EDUCATIONAL',
    'SPORTS',
    'MUSIC',
    'OUTDOORS',
    'ENTERTAINMENT',
    'ARTISTIC',
    'ANIMATION',
    'MISCELLANEOUS'];

  constructor() { }

  ngOnInit() {
  }

  search(query: string) {

  }
}
