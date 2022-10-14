import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('pricelevel', 'pricelevel');
  },
})
export class PricelevelView {
  @ViewColumn()
  name: string;
}
