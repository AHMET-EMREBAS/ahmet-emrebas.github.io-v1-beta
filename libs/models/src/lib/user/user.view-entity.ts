import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('user', 'user');
  },
})
export class UserView {
  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;
}
