import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('price', 'price');
  },
})
export class PriceView extends BaseViewEntity {
  @ViewColumn()
  cost: any;

  @ViewColumn()
  price: any;

  @ViewColumn()
  usedCost: any;

  @ViewColumn()
  usedPrice: any;
}
