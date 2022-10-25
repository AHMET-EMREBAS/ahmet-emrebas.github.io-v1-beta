import { ISKUEntity } from './sku.entity';
import { IStoreEntity } from './store.entity';

export interface IQuantityEntity {
  quantity: number;
  product: ISKUEntity;
  store: IStoreEntity;
}
