import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Quantity } from '../../models/quantity';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Quantity;
  }
}
