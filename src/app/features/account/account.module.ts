import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent} from './account/account.component';
import { ReactiveFormsModule} from '@angular/forms';
import { GenderPipe } from './pipes/gender/gender.pipe';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    AccountRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AccountComponent, GenderPipe]
})
export class AccountModule {}
