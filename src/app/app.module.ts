import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthenticationService} from './core/authentication/authentication.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
