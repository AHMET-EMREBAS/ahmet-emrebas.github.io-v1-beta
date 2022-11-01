import {
  EmailProperty,
  PasswordProperty,
} from 'swagger-property';

export class CreateUserDto {
  @EmailProperty({ exclude: true })
  username: string;

  @PasswordProperty()
  password: string;
}
