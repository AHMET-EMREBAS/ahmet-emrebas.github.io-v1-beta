import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Permission } from './permission.entity';

import { IPermission } from 'common/inventory/interfaces/permission';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('permission.id', 'id')
      .addSelect('permission.uuid', 'uuid')

      .addSelect('permission.name', 'name')

      .addSelect('permission.description', 'description')

      .from(Permission, 'permission');
  },
})
export class PermissionView implements IPermission {
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
}