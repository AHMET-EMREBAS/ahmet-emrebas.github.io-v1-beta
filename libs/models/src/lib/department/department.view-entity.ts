import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('department', 'department');
  },
})
export class DepartmentView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
