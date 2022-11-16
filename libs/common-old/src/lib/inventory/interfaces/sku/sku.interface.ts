import { BaseInterface } from '../../../base';

export interface ISku<Product> extends BaseInterface {
  name: string;

  barcode: string;

  description: string;

  product?: Product;
}
