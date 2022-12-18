import { Order } from './order.model';

export interface Client {
  id: number;
  name: string;
  surname: string;
  address: string;
  activeOrders: Order[];
  balance: number | null;
}
