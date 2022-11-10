import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Resource } from './resource.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('resource.id', 'id')
      .addSelect('resource.uuid', 'uuid')

      .addSelect('resource.name', 'name')

      .from(Resource, 'resource');
  },
})
export class ResourceView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() name: string;
}
