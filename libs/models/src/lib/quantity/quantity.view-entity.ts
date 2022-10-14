import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('quantity', 'quantity');
  },
})
export class QuantityView extends BaseViewEntity {
  @ViewColumn()
  quantity: any;
}
