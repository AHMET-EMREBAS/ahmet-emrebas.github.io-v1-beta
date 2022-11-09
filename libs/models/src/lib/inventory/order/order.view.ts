import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Order } from './order.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('order.id', 'id')
      .addSelect('order.uuid', 'uuid')

      .addSelect('order.quantity', 'quantity')

      .addSelect('order.unitprice', 'unitprice')

      .addSelect('order.discount', 'discount')

      .addSelect('order.taxExempt', 'taxExempt')

      .addSelect('sku.sku', 'sku')

      .addSelect('store.name', 'store')

      .addSelect('transaction.name', 'transaction')

      .from(Order, 'order')

      .leftJoin('sku', 'sku')

      .leftJoin('store', 'store')

      .leftJoin('transaction', 'transaction');
  },
})
export class OrderView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() quantity: integer;

  @ViewColumn() unitprice: number;

  @ViewColumn() discount: number;

  @ViewColumn() taxExempt: boolean;

  @ViewColumn() sku: string;

  @ViewColumn() store: string;

  @ViewColumn() transaction: string;
}
