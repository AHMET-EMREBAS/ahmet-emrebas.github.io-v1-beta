import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Price } from '../../models/price';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Price;
  }
}
