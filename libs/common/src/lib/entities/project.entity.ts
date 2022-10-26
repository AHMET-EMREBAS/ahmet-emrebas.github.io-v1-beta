import { IBaseEntity } from './base.entity';

export interface IProjectEntity extends IBaseEntity {
  name: string;
  description: string;
}
