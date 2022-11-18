import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Product } from '../../models/product';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Product;
  }
}
