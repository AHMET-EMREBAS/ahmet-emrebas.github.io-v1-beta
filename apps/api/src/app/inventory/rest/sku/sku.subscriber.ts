import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Sku } from '../../models/sku';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Sku;
  }
}
