import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Pricelevel } from './entity';

@EventSubscriber()
export class PricelevelSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Pricelevel;
  }
}
