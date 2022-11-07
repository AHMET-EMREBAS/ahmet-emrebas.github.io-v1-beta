export interface Product {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  name: string;

  description: string;

  category: string;

  department: string;
}
