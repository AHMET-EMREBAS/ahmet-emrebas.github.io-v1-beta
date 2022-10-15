import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('customer', 'customer');
  },
})
export class CustomerView extends BaseViewEntity {
  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  email: string;
}
