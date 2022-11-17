import { IUser } from 'common/inventory/interfaces/user';
import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import {
  Field,
  ObjectType,
} from '@nestjs/graphql';

import { Permission } from '../../permission';
import { User } from './user.entity';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('user.id * permission.id', 'id')
      .addSelect('user.uuid', 'uuid')
      .addSelect('user.createdAt', 'createdAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .addSelect('user.active', 'active')

      .addSelect('user.username', 'username')

      .addSelect('user.password', 'password')

      .addSelect('permission.name', 'permission')

      .from(User, 'user')

      .leftJoin('user-permission', 'permits', 'permits.userId = user.id')
      .leftJoin(
        Permission,
        'permission',
        'permission.id = permits.permissionId'
      );
  },
})
export class UserView implements IUser<string> {
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
  password: string;

  @Field()
  @ViewColumn()
  permission: string;

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
