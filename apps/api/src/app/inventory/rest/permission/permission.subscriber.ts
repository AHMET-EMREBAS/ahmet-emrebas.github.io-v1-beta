import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface {}
