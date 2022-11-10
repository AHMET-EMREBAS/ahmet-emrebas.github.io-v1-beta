export interface Price {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  price: string;

  cost: string;

  sku: string;

  pricelevel: string;
}
