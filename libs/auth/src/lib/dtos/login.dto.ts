import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class LoginDTO {
  @Expose()
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  username: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  password: string;
}
