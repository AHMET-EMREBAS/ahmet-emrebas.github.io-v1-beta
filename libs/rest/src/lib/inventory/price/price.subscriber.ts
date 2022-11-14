import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface {}
