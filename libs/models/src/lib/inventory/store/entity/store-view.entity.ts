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

      .addSelect('store.name', 'name')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Store, 'store')

      .leftJoin(Pricelevel, 'pricelevel');
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
}
