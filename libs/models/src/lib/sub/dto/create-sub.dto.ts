import {
  EmailProperty,
  LongTextProperty,
  PasswordProperty,
} from 'swagger-property';

export class CreateSubDto {
  @EmailProperty()
  username: string;

  @PasswordProperty()
  password: string;

  @LongTextProperty()
  permission: string;
}
