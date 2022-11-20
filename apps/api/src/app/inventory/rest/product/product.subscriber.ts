import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Product } from './entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Product;
  }
}
