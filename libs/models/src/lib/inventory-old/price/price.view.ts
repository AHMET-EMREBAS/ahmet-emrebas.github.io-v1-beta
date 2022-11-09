import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Price } from './price.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect('price.uuid', 'uuid')

      .addSelect('price.price', 'price')

      .addSelect('price.cost', 'cost')

      .addSelect('product.name', 'product')

      .from(Price, 'price')

      .leftJoin('product', 'product');
  },
})
export class PriceView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  product: string;
}
