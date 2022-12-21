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
    data: { animation: 'ToRight' },
    children: [
      {
        path: 'clients',
        component: ClientsListComponent,
        data: { animation: 'Third' },
      },
      {
        path: 'inventory',
        component: InventoryListComponent,
        data: { animation: 'Second' },
      },
      {
        path: 'orders',
        component: OrdersListComponent,
        data: { animation: 'First' },
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
        data: { animation: 'Last' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
