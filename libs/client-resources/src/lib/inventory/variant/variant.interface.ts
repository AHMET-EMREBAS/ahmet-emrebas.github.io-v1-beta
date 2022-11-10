export interface Variant {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  value: string;

  code: string;

  feature: string;
}
