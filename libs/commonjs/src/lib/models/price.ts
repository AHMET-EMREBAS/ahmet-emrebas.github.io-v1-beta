import { IPriceLevel } from './price-level';
import { IProduct } from './product';

export interface IPrice {
  price: number;
  product: IProduct;
  priceLevel: IPriceLevel;
}
