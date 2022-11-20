import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: 'string', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  username: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @IsNotEmpty()
  @Expose()
  password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ type: 'string', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  username: string;
}

export class LoginWithCodeDto {
  @ApiProperty({ type: 'string', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  username: string;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @Expose()
  code: number;
}
