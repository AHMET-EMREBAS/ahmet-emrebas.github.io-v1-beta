import { IPricelevelEntity } from './pricelevel.entity';
import { ISKUEntity } from './sku.entity';

export interface IPriceEntity {
  cost: number;
  price: number;
  product: ISKUEntity;
  priceLevel: IPricelevelEntity;
}
