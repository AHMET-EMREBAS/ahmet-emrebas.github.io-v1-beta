import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Product } from './product.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect('product.uuid', 'uuid')

      .addSelect('product.name', 'name')

      .addSelect('product.description', 'description')

      .addSelect('category.name', 'category')

      .addSelect('department.name', 'department')

      .from(Product, 'product')

      .leftJoin('category', 'category')

      .leftJoin('department', 'department');
  },
})
export class ProductView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  category: string;

  @ViewColumn()
  department: string;
}
