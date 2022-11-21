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

  @ApiProperty({ type: 'string', format: 'password' })
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

export class ResetPasswordDto {
  @ApiProperty({ type: 'string', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  username: string;

  @ApiProperty({ type: 'string', format: 'password' })
  @IsNotEmpty()
  @Expose()
  newPassword: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @Expose()
  code: string;
}
