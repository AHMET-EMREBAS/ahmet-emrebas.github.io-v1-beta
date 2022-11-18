import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Category } from '../../models/category';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Category;
  }
}
