import { BaseInterface } from '../../../base';

export interface IUser<Permission1> extends BaseInterface {
  username: string;

  password: string;

  permission?: Permission1;
}
