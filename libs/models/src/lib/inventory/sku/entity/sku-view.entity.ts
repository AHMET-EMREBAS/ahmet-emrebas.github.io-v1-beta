import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Sku } from './sku.entity';

import { ISku } from 'common/inventory/interfaces/sku';

import { Product } from '../../product';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sku.id', 'id')
      .addSelect('sku.uuid', 'uuid')
      .addSelect('sku.createdAt', 'createdAt')
      .addSelect('sku.updatedAt', 'updatedAt')
      .addSelect('sku.deletedAt', 'deletedAt')
      .addSelect('sku.active', 'active')

      .addSelect('sku.name', 'name')

      .addSelect('sku.barcode', 'barcode')

      .addSelect('sku.description', 'description')

      .addSelect('product.name', 'product')

      .from(Sku, 'sku')

      .leftJoin(Product, 'product', 'product.id = sku.productId');
  },
})
export class SkuView implements ISku<string> {
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
  barcode: string;

  @Field()
  @ViewColumn()
  description: string;

  @Field()
  @ViewColumn()
  product: string;

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
