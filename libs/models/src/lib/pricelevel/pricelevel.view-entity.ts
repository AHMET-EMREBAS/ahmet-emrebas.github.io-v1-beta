import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { BaseViewEntity } from 'api-core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('pricelevel', 'pricelevel');
  },
})
export class PricelevelView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
