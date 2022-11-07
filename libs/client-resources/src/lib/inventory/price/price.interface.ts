export interface Price {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  price: number;

  cost: number;

  product: string;
}
