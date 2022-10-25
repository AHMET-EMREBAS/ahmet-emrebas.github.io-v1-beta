import { IBaseEntity } from './base.entity';
import { ICustomerCredit } from './customer-credit.entity';

export interface ICustomerEntity extends IBaseEntity {
  username: string;
  password: string;
  credit: ICustomerCredit;
}
