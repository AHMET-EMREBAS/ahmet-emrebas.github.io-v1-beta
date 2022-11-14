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
      .addSelect('department.uuid', 'uuid')

      .addSelect('department.name', 'name')

      .from(Department, 'department');
  },
})
export class DepartmentView implements IDepartment {
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
