import { Property } from 'swagger-property';

export class CreateUserDto {
  @Property({
    isEmail: true,
  })
  username: email;

  @Property({
    isPassword: true,
    minLength: 6,
    maxLength: 50,
  })
  password: password;

  @Property({
    isNumberArray: true,
  })
  permissions: number[];
}
