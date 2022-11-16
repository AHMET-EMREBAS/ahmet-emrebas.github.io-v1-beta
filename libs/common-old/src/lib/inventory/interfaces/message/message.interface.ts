import { BaseInterface } from '../../../base';

export interface IMessage<User, User1> extends BaseInterface {
  message: string;

  to?: User;

  from?: User1;
}
