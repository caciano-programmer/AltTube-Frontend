import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {UploadRoutingModule} from './upload-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    UploadRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
