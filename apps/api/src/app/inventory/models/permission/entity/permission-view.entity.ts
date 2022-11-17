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
      .addSelect(`ROW_NUMBER () OVER (ORDER BY permission.id)`, 'index')

      .addSelect('permission.uuid', 'uuid')
      .addSelect('permission.createdAt', 'createdAt')
      .addSelect('permission.updatedAt', 'updatedAt')
      .addSelect('permission.deletedAt', 'deletedAt')
      .addSelect('permission.active', 'active')

      .addSelect('permission.name', 'name')

      .addSelect('permission.description', 'description')

      .from(Permission, 'permission');
  },
})
export class PermissionView implements IPermission {
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
  description: string;

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
