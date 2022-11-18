import { BaseInterface } from '../../../base';

export interface IProduct<Category1, Department2> extends BaseInterface {
  name: string;

  price: number;

  cost: number;

  description: string;

  category?: Category1;

  department?: Department2;
}
