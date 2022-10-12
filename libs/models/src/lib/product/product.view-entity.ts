import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('product', 'product');
  },
})
export class ProductView {
  @ViewColumn()
  name: string;
}
