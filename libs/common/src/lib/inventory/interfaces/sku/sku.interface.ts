export interface ISku<Product> {
  name: string;

  barcode: string;

  description: string;

  product?: Product;
}
