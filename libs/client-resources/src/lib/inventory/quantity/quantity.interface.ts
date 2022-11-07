export interface Quantity {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  quantity: number;

  product: string;

  store: string;
}
