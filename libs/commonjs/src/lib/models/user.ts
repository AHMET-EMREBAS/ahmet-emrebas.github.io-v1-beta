export interface IUser {
  /**
   * Unique username/email
   */
  username: string;

  /**
   * Strong password
   */
  password: string;

  permissions: string;
}

export interface UserCookie {
  sub: number;
  username: string;
  permissions: string;
}
