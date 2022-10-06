import { IProduct } from './product';
import { IStore } from './store';

export interface IQuantity {
  quantity: number;
  product: IProduct;
  store: IStore;
}
