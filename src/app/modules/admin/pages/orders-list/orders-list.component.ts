import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { Order } from '../../models/order.model';
import { AdminOrdersService } from '../../services/admin-orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent {
  originalOrders: Order[];
  orders: Order[];
  ordersObject: Order[] = [];

  constructor(private ordersService: AdminOrdersService) {
    this.orders = [];
    this.originalOrders = [];

    ordersService.getOrders().subscribe((orders) => {
      this.ordersObject = orders;
      this.orders = orders.sort((o1, o2) =>
        o1.name > o2.name ? 1 : o1.name < o2.name ? -1 : 0
      );
      this.originalOrders = this.orders;
    });
  }

  columnsToDisplay = ['name', 'item', 'address', 'amount', 'delivered'];

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  sorting() {}

  search(found: any[]) {
    this.orders = this.originalOrders;
    let ordersFiltered: Order[] = [];
    found.forEach((id) => {
      ordersFiltered.push(
        this.orders.filter((order: Order) => order.id === id)[0]
      );
    });
    this.orders = ordersFiltered;
  }
}
