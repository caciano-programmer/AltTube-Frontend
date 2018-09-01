import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {path: 'login', pathMatch: 'full', loadChildren: './../features/login/login.module#LoginModule'},
  {path: 'account', pathMatch: 'full', loadChildren: './../features/account/account.module#AccountModule'},
  {path: 'video', pathMatch: 'full', loadChildren: './../features/video/video.module#VideoModule'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
