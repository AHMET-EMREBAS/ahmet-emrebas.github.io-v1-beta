import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PricelevelSubscriber implements EntitySubscriberInterface {}
