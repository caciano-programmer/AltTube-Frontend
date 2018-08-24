import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {path: 'login', pathMatch: 'full', loadChildren: './login/login.module#LoginModule'},
  {path: 'account', pathMatch: 'full', loadChildren: './account/account.module#AccountModule'},
  {path: 'video', pathMatch: 'full', loadChildren: './video/video.module#VideoModule'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
