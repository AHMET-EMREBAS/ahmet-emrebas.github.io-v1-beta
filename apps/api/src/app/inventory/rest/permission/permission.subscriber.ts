import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Permission } from './entity';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Permission;
  }
}
