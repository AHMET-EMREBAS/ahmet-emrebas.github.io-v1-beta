import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';
import { IsOptional } from 'class-validator';
import { FilterMetadata } from 'primeng/api';
import {
  Equal,
  ILike,
  Not,
} from 'typeorm';

const transformQuery = {
  startsWith: (value: string) => {
    return ILike(`${value}%`);
  },
  endsWith: (value: string) => {
    return ILike(`%${value}`);
  },
  contains: (value: string) => {
    return ILike(`%${value}%`);
  },
  equals: (value: string) => {
    return Equal(value);
  },
  notEquals: (value: string) => {
    return Not(Equal(value));
  },
  notContains: (value: string) => {
    return Not(ILike(`%${value}%`));
  },
};

@Exclude()
export class WhereDTO {
  @Expose()
  @IsOptional()
  @Transform(({ value }) => {
    if (value) {
      const queries = [];

      const parsed = JSON.parse(value) as { [key: string]: FilterMetadata[] };
      const queryItems = Object.entries(parsed);

      for (const [key, value] of queryItems) {
        for (const queryExpression of value) {
          if (queryExpression.value)
            queries.push({
              [key]: transformQuery[queryExpression.matchMode](
                queryExpression.value
              ),
            });
        }
      }
      console.log('Query ITems : ', queries);

      if (queries.length > 0) {
        return queries;
      }
    }

    return undefined;
  })
  where: Record<string, Record<string, string>>;
}
