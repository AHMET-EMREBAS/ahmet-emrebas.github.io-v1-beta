import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Variant } from './variant.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('variant.id', 'id')
      .addSelect('variant.uuid', 'uuid')

      .addSelect('variant.value', 'value')

      .addSelect('variant.code', 'code')

      .addSelect('feature.feature', 'feature')

      .from(Variant, 'variant')

      .leftJoin('feature', 'feature');
  },
})
export class VariantView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() value: string;

  @ViewColumn() code: string;

  @ViewColumn() feature: string;
}
