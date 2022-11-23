import { IProduct } from './product.interface';

import { IReadCategory } from '../category';

import { IReadDepartment } from '../department';

export type IReadProduct = IProduct<IReadCategory, IReadDepartment>;
