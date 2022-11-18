import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Pricelevel } from '../../models/pricelevel';

@EventSubscriber()
export class PricelevelSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Pricelevel;
  }
}
