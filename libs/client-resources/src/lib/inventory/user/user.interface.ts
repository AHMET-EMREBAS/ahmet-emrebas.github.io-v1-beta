export interface User {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  username: string;

  password: string;

  permissions: string[];
}
