import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Department } from './department.entity';

import { IDepartment } from 'common/inventory/interfaces/department';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('department.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY department.id)`, 'index')

      .addSelect('department.uuid', 'uuid')
      .addSelect('department.createdAt', 'createdAt')
      .addSelect('department.updatedAt', 'updatedAt')
      .addSelect('department.deletedAt', 'deletedAt')
      .addSelect('department.active', 'active')

      .addSelect('department.name', 'name')

      .from(Department, 'department');
  },
})
export class DepartmentView implements IDepartment {
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
