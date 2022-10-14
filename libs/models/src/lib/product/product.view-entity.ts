import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('product', 'product');
  },
})
export class ProductView extends BaseViewEntity {
  @ViewColumn()
  barcode: string;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;
}
