import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface {}
