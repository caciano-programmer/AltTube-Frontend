import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import {EditRoutingModule} from './edit-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    EditRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
