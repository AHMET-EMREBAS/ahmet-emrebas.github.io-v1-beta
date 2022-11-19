import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: 'string', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  username: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @Matches(/[A-Z]{1,}/, { message: 'Must contain an uppercase letter!' })
  @Matches(/[a-z]{1,}/, { message: 'Must contain a lowercase letter!' })
  @Matches(/[0-9]{1,}/, { message: 'Must contain a number!' })
  @Matches(/[~!@#$%^&*()_+{}:">?<]{1,}/, {
    message: 'Must contain a special character!',
  })
  @IsNotEmpty()
  @Expose()
  password: string;
}
