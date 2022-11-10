import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Pricelevel } from './pricelevel.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('pricelevel.id', 'id')
      .addSelect('pricelevel.uuid', 'uuid')

      .addSelect('pricelevel.pricelevel', 'pricelevel')

      .from(Pricelevel, 'pricelevel');
  },
})
export class PricelevelView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() pricelevel: string;
}
