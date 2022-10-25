import { IBaseEntity } from './base.entity';
import { ICustomerEntity } from './customer.entity';
import { IOrderEntity } from './order.entity';
import { PaymentTypes } from './payment-type.enum';
import { IUserEntity } from './user.entity';

export interface ITransactionEntity extends IBaseEntity {
  orders: IOrderEntity[];
  employee: IUserEntity;
  customer: ICustomerEntity;
  total: number;
  subtotal: number;
  taxExempt: boolean;
  cache: number;
  card: number;
  credit: number;
  paymentType: PaymentTypes;
  notes: string;
}
