import {
  EmailProperty,
  PasswordProperty,
} from 'swagger-property';

export class LoginDto {
  @EmailProperty()
  username: string;

  @PasswordProperty()
  password: string;
}
