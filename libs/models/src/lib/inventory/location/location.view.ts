import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Location } from './location.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('location.id', 'id')
      .addSelect('location.uuid', 'uuid')

      .addSelect('location.location', 'location')

      .addSelect('location.x', 'x')

      .addSelect('location.y', 'y')

      .addSelect('location.z', 'z')

      .from(Location, 'location');
  },
})
export class LocationView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() location: string;

  @ViewColumn() x: string;

  @ViewColumn() y: string;

  @ViewColumn() z: string;
}
