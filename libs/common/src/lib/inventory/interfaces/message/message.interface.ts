import { BaseInterface } from '../../../base';

export interface IMessage<User1, User2> extends BaseInterface {
  message: string;

  to?: User1;

  from?: User2;
}
