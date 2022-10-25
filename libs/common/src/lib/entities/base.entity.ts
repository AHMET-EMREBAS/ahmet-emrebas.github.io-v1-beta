export interface IBaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  owner: number;
  activce: boolean;
}
