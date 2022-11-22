import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Price } from './entity';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Price;
  }
}
