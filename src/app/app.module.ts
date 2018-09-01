import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeModule} from './features/home/home.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthenticationService} from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
