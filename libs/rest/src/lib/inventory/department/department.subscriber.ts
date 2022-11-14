import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {}
