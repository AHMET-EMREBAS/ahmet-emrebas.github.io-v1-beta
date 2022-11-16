import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface {}
