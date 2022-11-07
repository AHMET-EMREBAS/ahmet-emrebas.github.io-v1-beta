import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Store } from './store.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect('store.uuid', 'uuid')

      .addSelect('store.name', 'name')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Store, 'store')

      .leftJoin('pricelevel', 'pricelevel');
  },
})
export class StoreView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  pricelevel: string;
}
