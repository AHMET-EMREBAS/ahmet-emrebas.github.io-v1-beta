import { Transform } from 'class-transformer';

import { Property } from './property.decorator';

export class QueryOptionsDTO {
  @Property({
    type: 'boolean',
    required: false,
  })
  @Transform(({ value }) => (value === 'true' ? true : false))
  hardDelete: boolean | 'true' | 'false';

  @Property({
    type: 'boolean',
    required: false,
  })
  @Transform(({ value }) => (value === 'true' ? true : false))
  withDeleted: boolean;
}

export class PaginatorDTO {
  @Property({ type: 'number', required: false, default: 20 })
  @Transform(({ value }) => value && parseInt(value))
  take: number;

  @Property({ type: 'number', required: false, default: 0 })
  @Transform(({ value }) => value && parseInt(value))
  skip: number;
}

export class WhereQueryDTO {
  @Property({ type: 'text', required: false })
  where: any;
}
