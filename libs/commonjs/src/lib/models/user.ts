import { IStore } from './store';

export interface IUser {
  /**
   * Unique username/email
   */
  username: string;

  /**
   * Strong password
   */
  password: string;

  /**
   * User can access the resouces allowed for these roles.
   */
  roles: string[];

  /**
   * User can access the stores by the given roles
   */
  stores: IStore[];
}
