import {
  Expose,
  Transform,
} from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

export class WhereDto {
  @ApiProperty({
    type: 'object',
  })
  @Transform(({ value }) => {
    console.log(value);
    return null;
  })
  @Expose()
  where: any;
}
