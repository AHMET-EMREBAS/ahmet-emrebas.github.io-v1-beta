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
      .addSelect('product.uuid', 'uuid')
      .addSelect('product.createdAt', 'createdAt')
      .addSelect('product.updatedAt', 'updatedAt')
      .addSelect('product.deletedAt', 'deletedAt')
      .addSelect('product.active', 'active')

      .addSelect('product.name', 'name')

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
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  name: string;

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
