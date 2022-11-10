export interface Order {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  quantity: string;

  unitprice: number;

  discount: number;

  taxExempt: boolean;

  sku: string;

  store: string;

  transaction: string;
}
