import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import { Order } from './order.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('order.id', 'id')
      .addSelect('order.uuid', 'uuid')

      .addSelect('order.quantity', 'quantity')

      .addSelect('product.name', 'product')

      .addSelect('store.name', 'pricelevel')

      .addSelect('transaction.uuid', 'transaction')

      .from(Order, 'order')

      .leftJoin('product', 'product')

      .leftJoin('store', 'store')

      .leftJoin('transaction', 'transaction');
  },
})
export class OrderView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  product: string;

  @ViewColumn()
  pricelevel: string;

  @ViewColumn()
  transaction: string;
}
