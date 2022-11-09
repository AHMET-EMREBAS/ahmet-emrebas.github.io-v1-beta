import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Feature } from './feature.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('feature.id', 'id')
      .addSelect('feature.uuid', 'uuid')

      .addSelect('feature.feature', 'feature')

      .from(Feature, 'feature');
  },
})
export class FeatureView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() feature: string;
}
