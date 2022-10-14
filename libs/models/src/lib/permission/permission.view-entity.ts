import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('permission', 'permission');
  },
})
export class PermissionView {
  @ViewColumn()
  name: string;
}
