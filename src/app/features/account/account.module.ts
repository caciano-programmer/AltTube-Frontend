import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import {AccountComponent} from './account.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule {}
