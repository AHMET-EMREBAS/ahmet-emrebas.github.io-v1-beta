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

      .addSelect('sku.sku', 'sku')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Price, 'price')

      .leftJoin('sku', 'sku')

      .leftJoin('pricelevel', 'pricelevel');
  },
})
export class PriceView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() price: string;

  @ViewColumn() cost: string;

  @ViewColumn() sku: string;

  @ViewColumn() pricelevel: string;
}
