import { Transform } from 'class-transformer';
import {
  IsEnum,
  NotEquals,
  ValidateNested,
} from 'class-validator';
import { ShortTextProperty } from 'swagger-property';
import {
  Equal,
  FindOptionsWhere,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export enum FilterMatchMode {
  STARTS_WITH = 'startsWith',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'notContains',
  ENDS_WITH = 'endsWith',
  EQUALS = 'equals',
  NOT_EQUALS = 'notEquals',
  IN = 'in',
  LESS_THAN = 'lt',
  LESS_THAN_OR_EQUAL_TO = 'lte',
  GREATER_THAN = 'gt',
  GREATER_THAN_OR_EQUAL_TO = 'gte',
  BETWEEN = 'between',
  IS = 'is',
  IS_NOT = 'isNot',
  BEFORE = 'before',
  AFTER = 'after',
  DATE_IS = 'dateIs',
  DATE_IS_NOT = 'dateIsNot',
  DATE_BEFORE = 'dateBefore',
  DATE_AFTER = 'dateAfter',
}

export const FilterMatchModeQuery = {
  startsWith: (value: any) => ILike(`${value}%`),
  contains: (value: any) => ILike(`%${value}%`),
  notContains: (value: any) => Not(ILike(`%${value}%`)),
  endsWith: (value: any) => ILike(`%${value}`),
  equals: (value: any) => Equal(value),
  notEquals: (value: any) => Not(Equal(value)),
  in: (value: any) => In(value),
  lt: (value: any) => LessThan(value),
  lte: (value: any) => LessThanOrEqual(value),
  gt: (value: any) => MoreThan(value),
  gte: (value: any) => MoreThanOrEqual(value),
  //   between: (value: any, value1: any) => Between(value, value1),
  is: (value: any) => Equal(value),
  isNot: (value: any) => Not(Equal(value)),
  before: (value: any) => LessThan(value),
  after: (value: any) => MoreThan(value),
  dateIs: (value: any) => Equal(value),
  dateIsNot: (value: any) => NotEquals(Equal(value)),
  dateBefore: (value: any) => LessThan(value),
  dateAfter: (value: any) => MoreThan(value),
};

export enum FilterOperator {
  AND = 'AND',
  OR = 'OR',
  and = 'and',
  or = 'or',
}

export class FilterMetadata {
  @ShortTextProperty()
  value?: string;

  @ApiProperty({
    enum: FilterMatchMode,
  })
  @IsEnum(FilterMatchMode)
  matchMode?: FilterMatchMode;

  @ApiProperty({
    enum: FilterOperator,
  })
  @IsEnum(FilterOperator)
  operator?: FilterOperator;
}

export class FilterProperty {
  @ShortTextProperty({ nullable: true })
  property: string;

  @ValidateNested()
  filters: FilterMetadata[];
}

export class WhereQueryDto<T = any> {
  @ApiProperty({ required: false })
  @ValidateNested()
  @Transform(({ value, obj }) => {
    console.log('----------- Where query is not implemented --------');
    console.log(value);
    return value;
  })
  where: FindOptionsWhere<T>;
}
