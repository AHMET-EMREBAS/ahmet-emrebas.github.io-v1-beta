import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('quantity', 'quantity');
  },
})
export class QuantityView {
  @ViewColumn()
  quantity: any;
}
