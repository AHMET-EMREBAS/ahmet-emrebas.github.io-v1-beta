import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Sku } from './entity';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Sku;
  }
}
