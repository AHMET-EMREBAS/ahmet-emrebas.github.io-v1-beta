import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select(['sample.id as id', 'sample.sample as sample'])
      .from('sample', 'sample');
  },
})
export class SampleView {
  @ViewColumn() id: number;
  @ViewColumn() sample: string;
}
