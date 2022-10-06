import { ISprint } from './sprint';
import { IUser } from './user';

export enum TaskPriority {
  LOW = 'LOW',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
}

export interface ITask {
  name: string;
  description: string;
  sprint: ISprint;
  priority: TaskPriority;
  due: Date;
  assignee: IUser;
}
