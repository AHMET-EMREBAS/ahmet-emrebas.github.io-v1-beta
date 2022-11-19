export interface IUserPermission {
  name: string;
}

export interface IAuthUser {
  id: number;
  uuid: string;
  username: string;
  password: string;
  permission: IUserPermission[];
}
