import { BaseInterface } from '../../../base';

export interface IQuantity<Sku, Store> extends BaseInterface {
  quantity: number;

  sku?: Sku;

  store?: Store;
}
