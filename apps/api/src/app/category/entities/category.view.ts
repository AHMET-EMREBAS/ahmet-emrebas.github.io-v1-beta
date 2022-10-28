import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select(['category.id as id', 'category.category as category'])
      .from('category', 'category');
  },
})
export class CategoryView {
  @ViewColumn() id: number;
  @ViewColumn() category: string;
}
