import { ICategory } from 'common/inventory/interfaces/category';
import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import {
  Field,
  ObjectType,
} from '@nestjs/graphql';

import { Category } from './category.entity';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect('category.uuid', 'uuid')

      .addSelect('category.name', 'name')

      .from(Category, 'category');
  },
})
export class CategoryView implements ICategory {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  name: string;
}
