import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('user', 'user');
  },
})
export class UserView extends BaseViewEntity {
  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  pin: string;

  @ViewColumn()
  workhours: string;
}
