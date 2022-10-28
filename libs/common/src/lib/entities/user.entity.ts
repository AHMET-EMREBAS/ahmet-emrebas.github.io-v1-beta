import { IBaseEntity } from './base.entity';

export interface IUserEntity extends IBaseEntity {
  username: string;
  password: string;
  permissions: string;
}
