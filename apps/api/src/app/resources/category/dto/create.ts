import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class Create {
  @ApiProperty({
    minLength: 3,
    maxLength: 20,
  })
  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  @Expose()
  name: string;
}
