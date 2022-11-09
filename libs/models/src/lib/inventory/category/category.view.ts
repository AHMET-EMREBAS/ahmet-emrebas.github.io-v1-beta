import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Category } from './category.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect('category.uuid', 'uuid')

      .addSelect('category.category', 'category')

      .from(Category, 'category');
  },
})
export class CategoryView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() category: string;
}
