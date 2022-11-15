import {
  Expose,
  Transform,
} from 'class-transformer';
import { IsOptional } from 'class-validator';
import { FilterMetadata } from 'primeng/api';
import {
  Between,
  Equal,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

const QUERIES = {
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
  between: (value: string) => {
    const [v, v1] = value.split(',');
    return Between(v, v1);
  },
  is: (value: any) => Equal(value),
  isNot: (value: any) => Not(Equal(value)),
  before: (value: any) => LessThan(value),
  after: (value: any) => MoreThan(value),
  dateIs: (value: any) => Equal(value),
  dateIsNot: (value: any) => Not(Equal(value)),
  dateBefore: (value: any) => LessThan(value),
  dateAfter: (value: any) => MoreThan(value),
};
export class WhereDto {
  @IsOptional()
  @Expose()
  @Transform(({ value }) => {
    if (!value) {
      return {};
    }
    const query = [];

    const filterObject = JSON.parse(value);
    const entries = Object.entries(filterObject);

    const globalFilter = entries.find(
      ([key, value]) => key === 'global'
    )?.[1] as FilterMetadata;

    for (const [key, value] of entries) {
      if (globalFilter?.value) {
        if (key === 'global') {
          continue;
        }
        query.push({ [key]: QUERIES.contains(globalFilter.value) });
        continue;
      }

      for (const f of value as FilterMetadata[]) {
        if (f.value && f.value !== 'undefined' && f.value !== 'null') {
          query.push({ [key]: QUERIES[f.matchMode](f.value) });
        }
      }
    }
    return query.length > 0 ? query : {};
  })
  where: any;
}
