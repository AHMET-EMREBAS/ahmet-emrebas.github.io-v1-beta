import { BaseInterface } from '../../../base';

export interface ISku<Product1> extends BaseInterface {
  name: string;

  barcode: string;

  description?: string;

  product?: Product1;
}
