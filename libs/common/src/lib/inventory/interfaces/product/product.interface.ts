import { BaseInterface } from '../../../base';

export interface IProduct<Category1, Department2> extends BaseInterface {
  name: string;

  description: string;

  category?: Category1;

  department?: Department2;
}
