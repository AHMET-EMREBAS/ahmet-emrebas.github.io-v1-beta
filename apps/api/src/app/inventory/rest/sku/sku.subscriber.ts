import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface {}
