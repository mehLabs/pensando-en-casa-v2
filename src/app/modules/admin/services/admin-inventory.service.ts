import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

const products: Product[] = [
  {
    id: 1,
    nombre: 'Sillón',
    cantidad: 25,
    ventas: 150,
    precio: 50000,
    paraEntregar: 5,
    descripcion: 'prueba',
    usado: false,
    id_categoria: 0,
    imgs: [''],
    visitas: 0,
  },
  {
    id: 0,
    nombre: 'Sillas',
    cantidad: 124,
    ventas: 1502,
    precio: 5000,
    paraEntregar: 15,
    descripcion: 'prueba',
    usado: false,
    id_categoria: 0,
    imgs: [''],
    visitas: 0,
  },
  {
    id: 2,
    nombre: 'Colhones',
    cantidad: 5,
    ventas: 15,
    precio: 80000,
    paraEntregar: 5,
    descripcion: 'prueba',
    usado: false,
    id_categoria: 0,
    imgs: [''],
    visitas: 0,
  },
];
const columns = [
  {
    name: 'id',
    title: 'ID',
  },
  {
    name: 'nombre',
    title: 'Nombre',
  },
  {
    name: 'ventas',
    title: 'Vendidos',
  },
  {
    name: 'precio',
    title: 'Precio',
  },
  {
    name: 'paraEntregar',
    title: 'Por entregar',
  },
  {
    name: 'id_categoria',
    title: 'Categoria',
  },
  {
    name: 'cantidad',
    title: 'Cantidad',
  },
  {
    name: 'btns',
    title: '',
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
