import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent} from './account/account.component';
import { ReactiveFormsModule} from '@angular/forms';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, GenderPipe]
})
export class AccountModule {}
