import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Quantity } from './entity';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Quantity;
  }
}
