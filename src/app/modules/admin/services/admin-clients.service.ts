import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

const clients: Client[] = [
  {
    id: 41074425,
    activeOrders: [],
    address: 'Güemes 1751',
    balance: 10,
    name: 'Hugo',
    surname: 'Iturrieta',
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
    name: 'surname',
    title: 'Apellido',
  },
  {
    name: 'activeOrders',
    title: 'Órdenes a entregar',
  },
  {
    name: 'address',
    title: 'Dirección',
  },
  {
    name: 'balance',
    title: 'Balance',
  },
  { name: 'space', title: '' },
];

@Injectable({
  providedIn: 'root',
})
export class AdminClientsService {
  private clientList = new BehaviorSubject<Client[]>(clients);
  private clientColumns = new BehaviorSubject<any[]>(columns);
  constructor() {}

  getClients(): Observable<Client[]> {
    return this.clientList.asObservable();
  }

  getColumns(): Observable<any[]> {
    return this.clientColumns.asObservable();
  }
}
