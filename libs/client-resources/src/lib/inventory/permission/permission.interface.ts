export interface Permission {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  permission: string;

  operation: string;

  resource: string;
}
