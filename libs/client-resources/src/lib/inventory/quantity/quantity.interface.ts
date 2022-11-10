export interface Quantity {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  quantity: string;

  sku: string;

  store: string;
}
