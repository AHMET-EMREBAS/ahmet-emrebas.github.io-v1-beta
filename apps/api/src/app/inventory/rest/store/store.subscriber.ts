import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Store } from '../../models/store';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Store;
  }
}
