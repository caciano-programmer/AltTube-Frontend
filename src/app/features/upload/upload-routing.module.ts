import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload/upload.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule {}
