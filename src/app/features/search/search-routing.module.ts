import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'keyword/:keyword', pathMatch: 'full', component: SearchComponent},
  {path: 'category/:category', pathMatch: 'full', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
