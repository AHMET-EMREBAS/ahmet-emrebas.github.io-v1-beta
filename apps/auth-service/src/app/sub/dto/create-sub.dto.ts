import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateSubDTO {
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @IsNotEmpty()
  password: string;
}
