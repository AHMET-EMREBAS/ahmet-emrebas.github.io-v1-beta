import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('store', 'store');
  },
})
export class StoreView {
  @ViewColumn()
  name: string;
}
