import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
