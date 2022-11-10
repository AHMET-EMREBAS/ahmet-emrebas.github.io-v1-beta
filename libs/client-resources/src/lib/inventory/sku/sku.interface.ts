export interface Sku {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  sku: string;

  barcode: string;

  description: string;

  variants: string[];

  product: string;
}
