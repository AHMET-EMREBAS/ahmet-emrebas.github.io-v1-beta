import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Quantity } from './quantity.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect('quantity.uuid', 'uuid')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('sku.sku', 'sku')

      .addSelect('store.name', 'store')

      .from(Quantity, 'quantity')

      .leftJoin('sku', 'sku')

      .leftJoin('store', 'store');
  },
})
export class QuantityView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() quantity: string;

  @ViewColumn() sku: string;

  @ViewColumn() store: string;
}
