import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { User } from './entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return User;
  }
}
