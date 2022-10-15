import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('credit', 'credit');
  },
})
export class CreditView extends BaseViewEntity {
  @ViewColumn()
  credit: any;
}
