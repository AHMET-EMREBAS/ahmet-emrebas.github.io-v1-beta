import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';

import { Property } from './property.decorator';

@Exclude()
export class QueryOptionsDTO {
  @Expose()
  @Property({
    type: 'boolean',
    required: false,
  })
  @Transform(({ value }) => (value === 'true' ? true : false))
  hardDelete: boolean;

  @Expose()
  @Property({
    type: 'boolean',
    required: false,
  })
  @Transform(({ value }) => (value === 'true' ? true : false))
  withDeleted: boolean;
}
@Exclude()
export class PaginatorDTO {
  @Expose()
  @Property({ type: 'number', required: false, default: 20 })
  @Transform(({ value }) => value && parseInt(value))
  take: number;

  @Expose()
  @Property({ type: 'number', required: false, default: 0 })
  @Transform(({ value }) => value && parseInt(value))
  skip: number;
}

@Exclude()
export class WhereQueryDTO {
  @Expose()
  @Property({ type: 'text', required: false })
  @Transform(({ value }) => {
    return {};
  })
  where: any;
}

@Exclude()
export class IncrementFieldDTO {
  @Expose()
  @Property({ type: 'string', minLength: 2, required: true })
  property: string;

  @Expose()
  @Property({ type: 'number', required: true, min: '0' })
  @Transform(({ value }) => value && parseInt(value))
  value: number;
}
