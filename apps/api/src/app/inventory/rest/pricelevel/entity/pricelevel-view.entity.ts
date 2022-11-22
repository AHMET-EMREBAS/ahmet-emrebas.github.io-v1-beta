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
      .addSelect(`ROW_NUMBER () OVER (ORDER BY pricelevel.id)`, 'index')

      .addSelect('pricelevel.uuid', 'uuid')
      .addSelect('pricelevel.createdAt', 'createdAt')
      .addSelect('pricelevel.updatedAt', 'updatedAt')
      .addSelect('pricelevel.deletedAt', 'deletedAt')
      .addSelect('pricelevel.active', 'active')

      .addSelect('pricelevel.name', 'name')

      .from(Pricelevel, 'pricelevel');
  },
})
export class PricelevelView implements IPricelevel {
  @Field()
  @ViewColumn()
  index: string;

  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  name: string;

  @Field()
  @ViewColumn()
  createdAt: Date;

  @Field()
  @ViewColumn()
  updatedAt: Date;

  @Field()
  @ViewColumn()
  deletedAt: Date;

  @Field()
  @ViewColumn()
  active: boolean;
}
