export interface Product {
  id: string | number;
  nombre: string;
  precio: number;
  descripcion: string;
  cantidad: number;
  usado: boolean;
  id_categoria: number | string;
  imgs: string[];
  ventas: number;
  visitas: number;
  paraEntregar?: number;
}
