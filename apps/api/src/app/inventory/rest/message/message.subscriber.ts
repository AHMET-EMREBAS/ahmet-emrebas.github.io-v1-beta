import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface {}
