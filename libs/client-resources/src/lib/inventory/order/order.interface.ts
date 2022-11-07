export interface Order {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  quantity: number;

  product: string;

  pricelevel: string;

  transaction: string;
}
