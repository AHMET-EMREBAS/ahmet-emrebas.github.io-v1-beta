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

      .addSelect('price.price', 'price')

      .addSelect('price.cost', 'cost')

      .addSelect('sku.barcode', 'barcode')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Price, 'price')

      .leftJoin(Sku, 'sku')

      .leftJoin(Pricelevel, 'pricelevel');
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
  pricelevel: string;
}
