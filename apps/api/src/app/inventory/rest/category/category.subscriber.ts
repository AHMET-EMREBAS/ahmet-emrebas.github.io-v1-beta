import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Category } from './entity';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Category;
  }
}
