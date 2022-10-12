import { Transform } from 'class-transformer';

import { Property } from './property.decorator';

export class QueryOptionsDTO {
  @Property({
    type: 'boolean',
    required: false,
  })
  @Transform(({ value }) => (value === 'true' ? true : false))
  hardDelete: boolean;

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

export class IncrementFieldDTO {
  @Property({ type: 'string', minLength: 2, required: true })
  property: string;

  @Property({ type: 'number', required: true, min: '0' })
  @Transform(({ value }) => value && parseInt(value))
  value: number;
}
