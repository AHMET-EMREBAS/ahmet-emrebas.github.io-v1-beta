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
}
