import {
  EmailProperty,
  PasswordProperty,
} from 'swagger-property';

export class CreateUserDto {
  @EmailProperty()
  username: string;

  @PasswordProperty()
  password: string;
}
