import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Sample } from './sample.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sample.id', 'id')
      .addSelect('sample.uuid', 'uuid')

      .addSelect('sample.name', 'name')

      .addSelect('sample.description', 'description')

      .from(Sample, 'sample');
  },
})
export class SampleView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;
}
