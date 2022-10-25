import { IBaseEntity } from './base.entity';

/**
 * Products might have multiple prices, each price must be associated with one price level.
 */
export interface IPricelevelEntity extends IBaseEntity {
  name: string;
}
