import { IBaseEntity } from './base.entity';
import { ISKUEntity } from './sku.entity';

export interface IProductEntity extends IBaseEntity {
  upc: string;
  name: string;
  description: string;
  skus: ISKUEntity[];
}
