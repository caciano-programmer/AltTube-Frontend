import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {UploadRoutingModule} from './upload-routing';

@NgModule({
  imports: [
    UploadRoutingModule,
    CommonModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
