import { IBaseEntity } from './base.entity';
import { IProductEntity } from './product.entity';

export interface ISKUEntity<TDetail = Record<string, string>>
  extends IBaseEntity {
  product: IProductEntity;
  barcode: string;
  cost: number;
  price: number;
  used: boolean;
  quantity: number;
  details: TDetail;
}
