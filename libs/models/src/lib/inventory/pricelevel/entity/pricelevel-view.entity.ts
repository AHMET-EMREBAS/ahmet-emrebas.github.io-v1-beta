import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Pricelevel } from './pricelevel.entity';

import { IPricelevel } from 'common/inventory/interfaces/pricelevel';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('pricelevel.id', 'id')
      .addSelect('pricelevel.uuid', 'uuid')

      .addSelect('pricelevel.name', 'name')

      .from(Pricelevel, 'pricelevel');
  },
})
export class PricelevelView implements IPricelevel {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  name: string;
}
