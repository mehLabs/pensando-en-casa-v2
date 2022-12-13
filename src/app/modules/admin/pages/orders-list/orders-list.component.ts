import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const orders = [
  {
    name: 'Hugo Iturrieta',
    item: '2 zapatillas baratas',
    amount: 6000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    name: 'Abril Carrari',
    item: '1 camión de maquillaje',
    amount: 600000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    name: 'Kiara (michi)',
    item: '1 gato macho',
    amount: 1000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    name: 'Mariano',
    item: '400 logos diferentes',
    amount: 1000000,
    address: 'Alberti 29292',
    delivered: false,
  },
];

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements AfterViewInit {
  columnsToDisplay = ['name', 'item', 'address', 'amount', 'delivered'];

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  orders = new MatTableDataSource(
    orders.sort((o1, o2) =>
      o1.name > o2.name ? 1 : o1.name < o2.name ? -1 : 0
    )
  );

  sorting() {}

  ngAfterViewInit(): void {
    this.orders.sort = this.sort;
  }
}
