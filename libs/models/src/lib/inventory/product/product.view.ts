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

      .addSelect('product.code', 'code')

      .addSelect('category.name', 'category')

      .addSelect('department.name', 'department')

      .addSelect('variant.name', 'variants')

      .from(Product, 'product')

      .leftJoin('category', 'category')

      .leftJoin('department', 'department')

      .leftJoin('variant', 'variant');
  },
})
export class ProductView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() name: string;

  @ViewColumn() description: string;

  @ViewColumn() code: string;

  @ViewColumn() category: string;

  @ViewColumn() department: string;

  @ViewColumn() variants: string[];
}
