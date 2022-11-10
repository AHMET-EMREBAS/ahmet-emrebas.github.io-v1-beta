import { ClassConstructor } from 'core';
import { User } from 'models/inventory/user';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  logger = new Logger(UserSubscriber.name);

  listenTo(): ClassConstructor<User> {
    return User;
  }

  beforeInsert(event: InsertEvent<User>): void | Promise<any> {
    this.logger.log('[User] Inserted user', event.entity);
  }

  beforeRemove(event: RemoveEvent<User>): void | Promise<any> {
    this.logger.log('[User] Removed user', event.entity);
  }
}
