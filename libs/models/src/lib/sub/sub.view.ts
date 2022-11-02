import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import { Sub } from './sub.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sub.id', 'id')
      .addSelect('sub.uuid', 'uuid')
      .addSelect('sub.username', 'username')
      .addSelect('sub.password', 'password')
      .addSelect('sub.permission', 'permission')
      .from(Sub, 'sub');
  },
})
export class SubView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;
  @ViewColumn() username: string;
  @ViewColumn() password: string;
  @ViewColumn() permission: string;
}
