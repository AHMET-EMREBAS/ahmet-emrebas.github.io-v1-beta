import { IReadUser } from '../user';
import { IMessage } from './message.interface';

export type IReadMessage = IMessage<IReadUser, IReadUser>;
