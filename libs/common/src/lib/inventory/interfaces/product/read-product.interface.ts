import { IProduct } from './product.interface';

import { ICategory } from '../category';

import { IDepartment } from '../department';

export type IReadProduct = IProduct<ICategory, IDepartment>;
