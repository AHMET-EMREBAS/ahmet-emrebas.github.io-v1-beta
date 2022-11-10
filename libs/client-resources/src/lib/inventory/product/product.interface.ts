export interface Product {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  name: string;

  description: string;

  code: string;

  category: string;

  department: string;

  variants: string[];
}
