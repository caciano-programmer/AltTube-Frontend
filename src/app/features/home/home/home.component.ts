import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../../../shared/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  keyword: string = '';
  categories: string[] = Categories;

  constructor(private router: Router) {}

  submitKeyword(): void { this.router.navigate([`/search/keyword/${this.keyword}`]); }

  submitCategory(category: string): void { this.router.navigate([`/search/category/${category}`]); }
}
