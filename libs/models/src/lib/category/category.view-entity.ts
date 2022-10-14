import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('category', 'category');
  },
})
export class CategoryView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
