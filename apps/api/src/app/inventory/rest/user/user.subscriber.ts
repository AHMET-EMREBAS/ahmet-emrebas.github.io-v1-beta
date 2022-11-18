import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { User } from '../../models/user';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return User;
  }
}
