import { Expose } from 'class-transformer';
import {
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSampleDto {
  @ApiProperty({
    type: 'string',
    minLength: 3,
    maxLength: 3,
  })
  @Expose()
  @MinLength(3)
  @MaxLength(30)
  name: string;
}
