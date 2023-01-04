import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'clients',
        component: ClientsListComponent,
      },
      {
        path: 'inventory',
        component: InventoryListComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
