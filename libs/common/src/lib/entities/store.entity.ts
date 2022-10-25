import { IBaseEntity } from './base.entity';
import { IPricelevelEntity } from './pricelevel.entity';

export interface IStoreEntity extends IBaseEntity {
  name: string;
  priceLevel: IPricelevelEntity;
}
