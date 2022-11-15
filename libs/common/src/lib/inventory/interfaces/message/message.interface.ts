import { BaseInterface } from '../../../base';

export interface IMessage<User, User> extends BaseInterface {
  message: string;

  to?: User;

  from?: User;
}
