import { BaseInterface } from '../../../base';

export interface IUser<Permission> extends BaseInterface {
  username: string;

  password: string;

  permission?: Permission;
}
