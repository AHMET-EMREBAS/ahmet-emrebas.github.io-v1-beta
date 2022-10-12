import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('category', 'category');
  },
})
export class CategoryView {
  @ViewColumn()
  name: string;
}
