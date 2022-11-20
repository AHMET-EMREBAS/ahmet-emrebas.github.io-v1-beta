import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Store } from './entity';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Store;
  }
}
