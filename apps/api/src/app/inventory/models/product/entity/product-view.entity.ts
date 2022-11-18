import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Product } from './product.entity';

import { IProduct } from 'common/inventory/interfaces/product';

import { Category } from '../../category';

import { Department } from '../../department';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY product.id)`, 'index')

      .addSelect('product.uuid', 'uuid')
      .addSelect('product.createdAt', 'createdAt')
      .addSelect('product.updatedAt', 'updatedAt')
      .addSelect('product.deletedAt', 'deletedAt')
      .addSelect('product.active', 'active')

      .addSelect('product.name', 'name')

      .addSelect('product.price', 'price')

      .addSelect('product.cost', 'cost')

      .addSelect('product.description', 'description')

      .addSelect('category.name', 'category')

      .addSelect('department.name', 'department')

      .from(Product, 'product')

      .leftJoin(Category, 'category', 'category.id = product.categoryId')

      .leftJoin(
        Department,
        'department',
        'department.id = product.departmentId'
      );
  },
})
export class ProductView implements IProduct<string, string> {
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
  price: number;

  @Field()
  @ViewColumn()
  cost: number;

  @Field()
  @ViewColumn()
  description: string;

  @Field()
  @ViewColumn()
  category: string;

  @Field()
  @ViewColumn()
  department: string;

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
