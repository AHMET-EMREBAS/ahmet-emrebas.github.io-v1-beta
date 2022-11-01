import {
  EmailProperty,
  PasswordProperty,
  TextProperty,
} from 'swagger-property';

export class CreateSubDTO {
  @EmailProperty()
  username: string;

  @PasswordProperty()
  password: string;

  @TextProperty()
  permission: string;
}
