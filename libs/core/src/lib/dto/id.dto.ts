import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ID {
  @ApiProperty({ type: 'number', minimum: 1 })
  @IsNumber()
  @Expose()
  id: number;
}
