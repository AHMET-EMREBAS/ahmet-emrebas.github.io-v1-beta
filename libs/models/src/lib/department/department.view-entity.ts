import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('department', 'department');
  },
})
export class DepartmentView {
  @ViewColumn()
  name: string;
}
