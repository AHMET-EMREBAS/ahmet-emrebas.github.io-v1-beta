import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('permission', 'permission');
  },
})
export class PermissionView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
