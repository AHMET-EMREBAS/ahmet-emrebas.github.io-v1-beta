export interface IUser<Role> {
  username: string;
  password: string;
  roles: Role[];
}
