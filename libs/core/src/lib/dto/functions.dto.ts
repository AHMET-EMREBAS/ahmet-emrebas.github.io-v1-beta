import { Expose } from 'class-transformer';
import { IsIn } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class FunctionsDto {
  @ApiProperty({ enum: ['count'] })
  @IsIn(['count'])
  @Expose()
  query: 'count';
}
