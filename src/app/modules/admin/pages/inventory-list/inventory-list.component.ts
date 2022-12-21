import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { AdminInventoryService } from '../../services/admin-inventory.service';

type Column = {
  name: string;
  title: string;
};
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent {
  products: Product[];
  originalProducts: Product[] = [];
  cleanOutput(element: any) {
    return element == false && element !== 0 ? '-' : element;
  }

  constructor(private inventoryService: AdminInventoryService) {
    this.columns = [];
    this.products = [];
    inventoryService.getInventory().subscribe((products) => {
      if (products.length > 0) {
        this.products = products;
        this.originalProducts = [...products];
      }
    });
    inventoryService.getColumns().subscribe((columns) => {
      this.columns = columns;
    });
  }

  //Buttons
  add(element: Product) {
    element.cantidad++;
  }
  remove(element: Product) {
    element.cantidad--;
  }
  delete(element: Product) {
    this.products = this.products.filter(
      (product) => product.id !== element.id
    );
    console.log();
  }

  sorting() {}

  columns: Column[];

  getColumnNames(columns: Column[]) {
    return columns.map((column) => column.name);
  }
  search(found: any[]) {
    this.products = this.originalProducts;
    let ordersFiltered: Product[] = [];
    found.forEach((id) => {
      ordersFiltered.push(
        this.products.filter((order: any) => order.id === id)[0]
      );
    });
    this.products = ordersFiltered;
  }
}
