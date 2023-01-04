import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';

import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { MatTableModule } from '@angular/material/table';
import { EssentialsModule } from '../essentials/essentials.module';

@NgModule({
  declarations: [
    AdminComponent,
    InventoryListComponent,
    OrdersListComponent,
    ClientsListComponent,
    SearchBarComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    EssentialsModule,
  ],
})
export class AdminModule {}
