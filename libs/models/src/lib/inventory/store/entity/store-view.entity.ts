import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Store } from './store.entity';

import { IStore } from 'common/inventory/interfaces/store';

import { Pricelevel } from '../../pricelevel';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect('store.uuid', 'uuid')
      .addSelect('store.createdAt', 'createdAt')
      .addSelect('store.updatedAt', 'updatedAt')
      .addSelect('store.deletedAt', 'deletedAt')
      .addSelect('store.active', 'active')

      .addSelect('store.name', 'name')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Store, 'store')

      .leftJoin(Pricelevel, 'pricelevel', 'pricelevel.id = store.pricelevelId');
  },
})
export class StoreView implements IStore<string> {
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
  pricelevel: string;

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
