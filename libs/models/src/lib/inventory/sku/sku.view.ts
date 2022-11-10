import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Sku } from './sku.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sku.id', 'id')
      .addSelect('sku.uuid', 'uuid')

      .addSelect('sku.sku', 'sku')

      .addSelect('sku.barcode', 'barcode')

      .addSelect('sku.description', 'description')

      .addSelect('variant.name', 'variants')

      .addSelect('product.name', 'product')

      .from(Sku, 'sku')

      .leftJoin('variant', 'variant')

      .leftJoin('product', 'product');
  },
})
export class SkuView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() sku: string;

  @ViewColumn() barcode: string;

  @ViewColumn() description: string;

  @ViewColumn() variants: string[];

  @ViewColumn() product: string;
}
