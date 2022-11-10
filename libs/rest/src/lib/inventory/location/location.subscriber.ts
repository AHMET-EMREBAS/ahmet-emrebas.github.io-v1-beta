import { ClassConstructor } from 'core';
import { Location } from 'models/inventory/location';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class LocationSubscriber implements EntitySubscriberInterface<Location> {
  logger = new Logger(LocationSubscriber.name);

  listenTo(): ClassConstructor<Location> {
    return Location;
  }

  beforeInsert(event: InsertEvent<Location>): void | Promise<any> {
    this.logger.log('[Location] Inserted location', event.entity);
  }

  beforeRemove(event: RemoveEvent<Location>): void | Promise<any> {
    this.logger.log('[Location] Removed location', event.entity);
  }
}
