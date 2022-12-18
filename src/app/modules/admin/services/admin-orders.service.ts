import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order.model';

const ordersMockup: Order[] = [
  {
    id: 0,
    name: 'Hugo Iturrieta',
    item: '2 zapatillas baratas',
    amount: 6000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    id: 1,
    name: 'Abril Carrari',
    item: '1 camión de maquillaje',
    amount: 600000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    id: 2,
    name: 'Kiara (michi)',
    item: '1 gato macho',
    amount: 1000,
    address: 'Güemes 2751',
    delivered: false,
  },
  {
    id: 3,
    name: 'Mariano',
    item: '400 logos diferentes',
    amount: 1000000,
    address: 'Alberti 29292',
    delivered: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class AdminOrdersService {
  private orders = new BehaviorSubject<Order[]>(ordersMockup);

  constructor() {}

  getOrders(): Observable<Order[]> {
    return this.orders.asObservable();
  }
}
