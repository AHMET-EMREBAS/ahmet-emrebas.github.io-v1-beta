import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Permission } from './permission.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('permission.id', 'id')
      .addSelect('permission.uuid', 'uuid')

      .addSelect('permission.permission', 'permission')

      .addSelect('permission.operation', 'operation')

      .addSelect('resource.name', 'resource')

      .from(Permission, 'permission')

      .leftJoin('resource', 'resource');
  },
})
export class PermissionView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() permission: string;

  @ViewColumn() operation: string;

  @ViewColumn() resource: string;
}
