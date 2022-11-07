import { ClassConstructor } from 'core';
import { Store } from 'models/inventory/store';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface<Store> {
  logger = new Logger(StoreSubscriber.name);

  listenTo(): ClassConstructor<Store> {
    return Store;
  }

  beforeInsert(event: InsertEvent<Store>): void | Promise<any> {
    this.logger.log('[Store] Inserted store', event.entity);
  }

  beforeRemove(event: RemoveEvent<Store>): void | Promise<any> {
    this.logger.log('[Store] Removed store', event.entity);
  }
}
