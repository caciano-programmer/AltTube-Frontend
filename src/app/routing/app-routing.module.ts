import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  {path: 'login', pathMatch: 'full', loadChildren: './../features/login/login.module#LoginModule'},
  {path: 'account', pathMatch: 'full', canActivate: [AuthGuardService], loadChildren: './../features/account/account.module#AccountModule'},
  {path: 'upload', pathMatch: 'full', canActivate: [AuthGuardService], loadChildren: './../features/upload/upload.module#UploadModule'},
  {path: 'video/:id', pathMatch: 'full', loadChildren: './../features/video/video.module#VideoModule'},
  {path: 'search', pathMatch: 'prefix', loadChildren: './../features/search/search.module#SearchModule'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
