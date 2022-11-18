import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Message } from '../../models/message';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Message;
  }
}
