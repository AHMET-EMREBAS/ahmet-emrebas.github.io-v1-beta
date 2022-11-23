import { IReadCategory } from '../category';
import { IReadDepartment } from '../department';
import { IProduct } from './product.interface';

export type IReadProduct = IProduct<IReadCategory, IReadDepartment>;
