import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Quantity } from './quantity.entity';

import { Sku } from '../../sku';

import { Store } from '../../store';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect('quantity.uuid', 'uuid')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('sku.name', 'sku')

      .addSelect('store.name', 'store')

      .from(Quantity, 'quantity')

      .leftJoin(Sku, 'sku')

      .leftJoin(Store, 'store');
  },
})
export class QuantityView {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  quantity: number;

  @Field()
  @ViewColumn()
  sku: string;

  @Field()
  @ViewColumn()
  store: string;
}
