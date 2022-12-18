import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';

import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AdminComponent,
    InventoryListComponent,
    OrdersListComponent,
    ClientsListComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
