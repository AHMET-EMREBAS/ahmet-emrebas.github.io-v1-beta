import { BaseInterface } from '../../../base';

export interface IMessage<User1, User2> extends BaseInterface {
  subject: string;

  message: string;

  receiver?: User1;

  sender?: User2;
}
