import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Store } from './store.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect('store.uuid', 'uuid')

      .addSelect('store.name', 'name')

      .from(Store, 'store');
  },
})
export class StoreView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() name: string;
}
