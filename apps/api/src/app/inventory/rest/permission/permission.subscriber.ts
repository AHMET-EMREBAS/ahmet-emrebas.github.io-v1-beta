import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Permission } from '../../models/permission';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Permission;
  }
}
