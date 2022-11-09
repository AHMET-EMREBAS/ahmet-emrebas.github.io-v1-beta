import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Department } from './department.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('department.id', 'id')
      .addSelect('department.uuid', 'uuid')

      .addSelect('department.department', 'department')

      .from(Department, 'department');
  },
})
export class DepartmentView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn() department: string;
}
