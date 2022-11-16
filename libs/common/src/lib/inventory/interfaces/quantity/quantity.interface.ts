import { BaseInterface } from '../../../base';

export interface IQuantity<Sku1, Store2> extends BaseInterface {
  quantity: number;

  sku?: Sku1;

  store?: Store2;
}
