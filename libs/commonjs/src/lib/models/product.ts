import { ICategory } from './category';
import { IDepartment } from './department';

export interface IProduct {
  code: string;
  name: string;
  description: string;
  category: ICategory;
  department: IDepartment;
}
