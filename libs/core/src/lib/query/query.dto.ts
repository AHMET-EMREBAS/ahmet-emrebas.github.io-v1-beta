import { Transform } from 'class-transformer';
import {
  FindOptionsOrder,
  FindOptionsWhere,
} from 'typeorm';

import { Property } from '../decorators';

export class QueryDTO<E> {
  @Property({ type: 'boolean', required: false, isOptional: true })
  @Transform(({ value }) => (value === 'true' ? true : false))
  withDeleted: boolean;

  @Property({ type: 'boolean', required: false, isOptional: true })
  @Transform(({ value }) => (value === 'true' ? true : false))
  hardDelete: boolean;

  @Property({ type: 'number', required: false, min: 1, isOptional: true })
  @Transform(({ value }) => value && parseInt(value))
  take: number;

  @Property({ type: 'number', required: false, min: 0, isOptional: true })
  @Transform(({ value }) => value && parseInt(value))
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

  @Property({ type: 'string', required: false, isOptional: true })
  @Transform(({ value }) => {
    return undefined;
  })
  where: FindOptionsWhere<E>;
}
