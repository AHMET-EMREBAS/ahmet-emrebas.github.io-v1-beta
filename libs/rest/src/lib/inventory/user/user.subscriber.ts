import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {}
