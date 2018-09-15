import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
