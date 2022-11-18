import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { Department } from '../../models/department';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Department;
  }
}
