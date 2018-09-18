import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, ThumbnailComponent, LoadingComponent],
  exports: [HeaderComponent, FooterComponent, ThumbnailComponent, LoadingComponent]
})
export class SharedModule { }
