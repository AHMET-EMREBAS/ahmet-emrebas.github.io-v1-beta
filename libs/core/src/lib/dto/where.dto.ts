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

    let queryType: 'global' | 'local';
    let globalValue = '';

    const localQuery = {};
    const globalQuery = [];

    const filterObject = JSON.parse(value);

    if (filterObject.global) {
      queryType = 'global';
      globalValue = filterObject.global.value;
    } else {
      queryType = 'local';
    }

    const entries = Object.entries(filterObject);

    function writeLocal(key: string, value: any) {
      localQuery[key] = value;
    }

    function writeGlobal(key: string) {
      globalQuery.push({ [key]: QUERIES.contains(globalValue) });
    }

    for (const [key, value] of entries) {
      if (key === 'global') {
        continue;
      }

      for (const f of value as FilterMetadata[]) {
        if (queryType === 'local') {
          if (f.value && f.value !== 'undefined' && f.value !== 'null') {
            writeLocal(key, QUERIES[f.matchMode](f.value));
          }
          continue;
        } else {
          writeGlobal(key);
        }
      }
    }
    return queryType === 'local'
      ? localQuery
      : globalQuery.length > 0
      ? globalQuery
      : {};
  })
  where: any;
}
