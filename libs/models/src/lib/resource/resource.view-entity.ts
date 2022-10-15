import { BaseViewEntity } from 'api-core';
import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('resource', 'resource');
  },
})
export class ResourceView extends BaseViewEntity {
  @ViewColumn()
  name: string;
}
