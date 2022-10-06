import { IUser } from './user';

export interface CommonFields {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: IUser;
  updatedBy?: IUser;
  deletedBy?: IUser;
  active?: boolean;
}
