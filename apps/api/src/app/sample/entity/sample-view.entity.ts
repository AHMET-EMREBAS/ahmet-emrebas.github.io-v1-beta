import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

import { Sample } from './sample.entity';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sample.name', 'name')

      .from(Sample, 'sample');
  },
})
export class SampleView {
  @Field((type) => Int)
  @ViewColumn()
  id: number;

  @Field(() => String)
  @ViewColumn()
  name: string;
}
