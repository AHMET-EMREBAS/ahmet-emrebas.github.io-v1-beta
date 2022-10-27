import { Transform } from 'class-transformer';
import { FindOptionsOrder } from 'typeorm';

import { Property } from '../decorators';

export class QueryDTO<E> {
  @Property({ type: 'boolean', required: false, isOptional: true })
  withDeleted: boolean;

  @Property({ type: 'number', required: false, min: 1, isOptional: true })
  take: number;

  @Property({ type: 'number', required: false, min: 1, isOptional: true })
  skip: number;

  @Property({ type: 'string', required: false, isOptional: true })
  @Transform(({ value }) => {
    try {
      return value && JSON.parse(value);
    } catch (err) {
      return undefined;
    }
  })
  order: FindOptionsOrder<E>;
}
