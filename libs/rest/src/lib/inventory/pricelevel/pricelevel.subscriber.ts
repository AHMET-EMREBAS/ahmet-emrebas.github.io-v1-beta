import { ClassConstructor } from 'core';
import { Pricelevel } from 'models/inventory/pricelevel';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class PricelevelSubscriber
  implements EntitySubscriberInterface<Pricelevel>
{
  logger = new Logger(PricelevelSubscriber.name);

  listenTo(): ClassConstructor<Pricelevel> {
    return Pricelevel;
  }

  beforeInsert(event: InsertEvent<Pricelevel>): void | Promise<any> {
    this.logger.log('[Pricelevel] Inserted pricelevel', event.entity);
  }

  beforeRemove(event: RemoveEvent<Pricelevel>): void | Promise<any> {
    this.logger.log('[Pricelevel] Removed pricelevel', event.entity);
  }
}
