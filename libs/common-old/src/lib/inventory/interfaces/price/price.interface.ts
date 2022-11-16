import { BaseInterface } from '../../../base';

export interface IPrice<Sku, Pricelevel> extends BaseInterface {
  price: number;

  cost: number;

  sku?: Sku;

  pricelevel?: Pricelevel;
}
