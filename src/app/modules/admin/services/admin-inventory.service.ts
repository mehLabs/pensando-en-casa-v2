import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

const products: Product[] = [
  {
    id: 1,
    name: 'Sillón',
    quantity: 25,
    sold: 150,
    price: 50000,
    toDeliever: 5,
    balance: 1000000,
  },
  {
    id: 0,
    name: 'Sillas',
    quantity: 124,
    sold: 1502,
    price: 5000,
    toDeliever: 15,
    balance: 100057,
  },
  {
    id: 2,
    name: 'Colhones',
    quantity: 5,
    sold: 15,
    price: 80000,
    toDeliever: 5,
    balance: 1000000,
  },
];
const columns = [
  {
    name: 'id',
    title: 'DNI',
  },
  {
    name: 'name',
    title: 'Nombre',
  },
  {
    name: 'quantity',
    title: 'Cantidad',
  },
  {
    name: 'sold',
    title: 'Vendidos',
  },
  {
    name: 'price',
    title: 'Precio',
  },
  {
    name: 'toDeliever',
    title: 'Por entregar',
  },
  {
    name: 'balance',
    title: 'Balance',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AdminInventoryService {
  private productList = new BehaviorSubject<Product[]>(products);
  private productColumns = new BehaviorSubject<any[]>(columns);
  constructor() {}

  getInventory(): Observable<Product[]> {
    return this.productList.asObservable();
  }

  getColumns(): Observable<any[]> {
    return this.productColumns.asObservable();
  }
}
