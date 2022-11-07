import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Quantity } from './quantity.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect('quantity.uuid', 'uuid')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('product.name', 'product')

      .addSelect('store.name', 'store')

      .from(Quantity, 'quantity')

      .leftJoin('product', 'product')

      .leftJoin('store', 'store');
  },
})
export class QuantityView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  product: string;

  @ViewColumn()
  store: string;
}
