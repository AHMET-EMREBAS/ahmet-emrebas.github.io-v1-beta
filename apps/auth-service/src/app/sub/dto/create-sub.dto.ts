import {
  EmailProperty,
  PasswordProperty,
} from 'swagger-property';

export class CreateSubDTO {
  @EmailProperty()
  username: string;

  @PasswordProperty()
  password: string;
}
