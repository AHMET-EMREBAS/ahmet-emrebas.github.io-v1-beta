import { IBaseEntity } from './base.entity';
import { IPermissionRecord } from './permission.record';

export interface IUserEntity extends IBaseEntity {
  username: string;
  password: string;
  permissions: IPermissionRecord[];
}
