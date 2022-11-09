import { ModelBaseInterface } from '../../base';

export interface ICategory extends ModelBaseInterface {
  name: string;
}

export type ICategoryKey = keyof ICategory;

export type PartialICategory = Partial<ICategory>;
