import { BaseInterface } from '../../../base';

export interface IPrice<Sku1, Pricelevel2> extends BaseInterface {
  price: number;

  cost: number;

  sku?: Sku1;

  pricelevel?: Pricelevel2;
}
