import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {}
