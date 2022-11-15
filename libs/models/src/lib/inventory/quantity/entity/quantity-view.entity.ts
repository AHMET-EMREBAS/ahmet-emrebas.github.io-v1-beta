import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Quantity } from './quantity.entity';

import { IQuantity } from 'common/inventory/interfaces/quantity';

import { Sku } from '../../sku';

import { Store } from '../../store';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect('quantity.uuid', 'uuid')
      .addSelect('quantity.createdAt', 'createdAt')
      .addSelect('quantity.updatedAt', 'updatedAt')
      .addSelect('quantity.deletedAt', 'deletedAt')
      .addSelect('quantity.active', 'active')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('sku.name', 'sku')

      .addSelect('store.name', 'store')

      .from(Quantity, 'quantity')

      .leftJoin(Sku, 'sku', 'sku.id = quantity.skuId')

      .leftJoin(Store, 'store', 'store.id = quantity.storeId');
  },
})
export class QuantityView implements IQuantity<string, string> {
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
