import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { User } from './user.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('user.id', 'id')
      .addSelect('user.uuid', 'uuid')

      .addSelect('user.username', 'username')

      .addSelect('user.password', 'password')

      .addSelect('permission.permission', 'permissions')

      .from(User, 'user')

      .leftJoin('permission', 'permission');
  },
})
export class UserView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() username: string;

  @ViewColumn() password: string;

  @ViewColumn() permissions: string[];
}
