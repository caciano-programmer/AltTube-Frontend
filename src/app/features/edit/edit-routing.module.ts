import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {}
