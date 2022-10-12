import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('todo', 'todo');
  },
})
export class TodoView {
  @ViewColumn()
  name: string;
}
