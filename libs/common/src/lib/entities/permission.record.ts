import { Operations } from './operations.enum';

export interface IPermissionRecord {
  app: string;
  resource: string;
  operation: Operations;
}
