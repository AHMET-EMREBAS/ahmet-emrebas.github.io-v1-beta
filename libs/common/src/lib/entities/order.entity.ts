import { IBaseEntity } from './base.entity';
import { ISKUEntity } from './sku.entity';

export interface IOrderEntity extends IBaseEntity {
  product: ISKUEntity;
  quantity: number;
  price: number;
}
