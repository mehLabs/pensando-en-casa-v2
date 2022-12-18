export class Order {
  id?: string | number;
  name: string = '';
  item: string | null = null;
  amount: number | null = null;
  address: string | null = null;
  delivered: boolean | null = null;
}
