import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Price } from './price.entity';

import { IPrice } from 'common/inventory/interfaces/price';

import { Sku } from '../../sku';

import { Pricelevel } from '../../pricelevel';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect('price.uuid', 'uuid')
      .addSelect('price.createdAt', 'createdAt')
      .addSelect('price.updatedAt', 'updatedAt')
      .addSelect('price.deletedAt', 'deletedAt')
      .addSelect('price.active', 'active')

      .addSelect('price.price', 'price')

      .addSelect('price.cost', 'cost')

      .addSelect('sku.barcode', 'barcode')

      .addSelect('sku.name', 'sku')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Price, 'price')

      .leftJoin(Sku, 'sku', 'sku.id = price.skuId')

      .leftJoin(Pricelevel, 'pricelevel', 'pricelevel.id = price.pricelevelId');
  },
})
export class PriceView implements IPrice<string, string> {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  price: number;

  @Field()
  @ViewColumn()
  cost: number;

  @Field()
  @ViewColumn()
  barcode: string;

  @Field()
  @ViewColumn()
  sku: string;

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
