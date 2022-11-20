import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Department } from './entity';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Department;
  }
}
