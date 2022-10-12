import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*');
  },
})
export class SomeView {
  @ViewColumn()
  name: string;
}
