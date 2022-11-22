import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Message } from './entity';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Message;
  }
}
