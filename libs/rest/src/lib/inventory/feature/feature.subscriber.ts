import { ClassConstructor } from 'core';
import { Feature } from 'models/inventory/feature';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class FeatureSubscriber implements EntitySubscriberInterface<Feature> {
  logger = new Logger(FeatureSubscriber.name);

  listenTo(): ClassConstructor<Feature> {
    return Feature;
  }

  beforeInsert(event: InsertEvent<Feature>): void | Promise<any> {
    this.logger.log('[Feature] Inserted feature', event.entity);
  }

  beforeRemove(event: RemoveEvent<Feature>): void | Promise<any> {
    this.logger.log('[Feature] Removed feature', event.entity);
  }
}
