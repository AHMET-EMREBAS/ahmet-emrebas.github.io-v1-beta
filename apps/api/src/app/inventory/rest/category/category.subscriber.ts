import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {}
