import { IBaseEntity } from './base.entity';
import { IProjectEntity } from './project.entity';
import { ISprintEntity } from './sprint.entity';

export interface IIssueEntity extends IBaseEntity {
  description: string;
  status: string;
  estimate: string;
  priority: string;
  type: string;
  project: IProjectEntity;
  sprint: ISprintEntity;
}
