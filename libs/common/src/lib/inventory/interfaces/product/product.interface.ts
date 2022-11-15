import { BaseInterface } from '../../../base';

export interface IProduct<Category, Department> extends BaseInterface {
  name: string;

  description: string;

  category?: Category;

  department?: Department;
}
