import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .select('category.uuid', 'uuid')
      .select('category.name', 'name')
      .from('category', 'category');
  },
})
export class CategoryView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;
  @ViewColumn() name: string;
}
