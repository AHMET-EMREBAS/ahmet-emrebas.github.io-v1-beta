import { ICategory } from './category';
import { IDepartment } from './department';

export interface IProduct {
  /**
   * Unieuq Product code like 12 21 etc.
   */
  code: string;

  /**
   * Product name
   */
  name: string;

  category: ICategory;
  department: IDepartment;
}
