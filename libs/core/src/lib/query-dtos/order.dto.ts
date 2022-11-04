import {
  Expose,
  Transform,
} from 'class-transformer';
import { isNotEmpty } from 'class-validator';
import { ShortTextProperty } from 'swagger-property';
import { FindOptionsOrder } from 'typeorm';

export class OrderDto {
  @ShortTextProperty({ nullable: true, exclude: true })
  sortField?: string;

  @ShortTextProperty({ nullable: true, exclude: true })
  sortOrder?: 'ASC' | 'DESCK';

  @Expose()
  @Transform(({ obj }) => {
    if (
      isNotEmpty(obj?.sortField?.trim()) &&
      isNotEmpty(obj?.sortOrder?.trim()) &&
      !['null', 'undefined'].includes(obj.sortField) &&
      !['null', 'undefined'].includes(obj.sortOrder)
    ) {
      return {
        [obj.sortField]: {
          direction: obj.sortOrder,
          null: 'last',
        },
      };
    }
    return {};
  })
  order: FindOptionsOrder<any>;
}
