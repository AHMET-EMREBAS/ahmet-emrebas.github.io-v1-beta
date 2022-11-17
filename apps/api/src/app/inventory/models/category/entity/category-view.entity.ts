import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Category } from './category.entity';

import { ICategory } from 'common/inventory/interfaces/category';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY category.id)`, 'index')

      .addSelect('category.uuid', 'uuid')
      .addSelect('category.createdAt', 'createdAt')
      .addSelect('category.updatedAt', 'updatedAt')
      .addSelect('category.deletedAt', 'deletedAt')
      .addSelect('category.active', 'active')

      .addSelect('category.name', 'name')

      .from(Category, 'category');
  },
})
export class CategoryView implements ICategory {
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
