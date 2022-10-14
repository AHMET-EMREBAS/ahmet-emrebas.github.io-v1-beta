import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('store', 'store');
  },
})
export class StoreView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
