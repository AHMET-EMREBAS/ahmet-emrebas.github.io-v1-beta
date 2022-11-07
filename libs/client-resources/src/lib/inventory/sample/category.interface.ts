export interface Category {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  name: string;
  cities: string;

  price: number;
  dob: Date;
  age: number;
}
