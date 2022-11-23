import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { User } from './user.entity';

import { IUser } from 'common/inventory/interfaces/user';

import { Permission } from '../../permission';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('user.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY user.id)`, 'index')

      .addSelect('user.uuid', 'uuid')
      .addSelect('user.createdAt', 'createdAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .addSelect('user.active', 'active')

      .addSelect('user.username', 'username')

      .addSelect('user.code', 'code')

      .addSelect('user.password', 'password')

      .from(User, 'user')

      .leftJoin(
        'user-permission',
        'userPermission',
        'userPermission.userId = user.id'
      )

      .leftJoin(
        Permission,
        'permission',
        'permission.id = userPermission.permissionId '
      );
  },
})
export class UserView implements IUser<string> {
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
  username: string;

  @Field()
  @ViewColumn()
  code: string;

  @Field()
  @ViewColumn()
  password: string;

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
