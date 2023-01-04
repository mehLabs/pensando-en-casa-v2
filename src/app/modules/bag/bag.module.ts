import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagComponent } from './bag.component';
import { BagCardComponent } from './components/bag-card/bag-card.component';
import { SharedModule } from '../shared/shared.module';
import { EssentialsModule } from '../essentials/essentials.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [BagCardComponent, BagComponent, DialogComponent, CheckoutComponent],
  imports: [
    SharedModule,
    EssentialsModule,
    CommonModule,
    BagRoutingModule,
    MatDialogModule,
  ],
})
export class BagModule {}
