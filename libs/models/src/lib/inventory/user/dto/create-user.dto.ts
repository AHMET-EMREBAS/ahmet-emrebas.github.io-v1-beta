import { Property } from 'swagger-property';

export class CreateUserDto {
  @Property({
    isEmail: true,
  })
  username: string;

  @Property({
    isPassword: true,
    minLength: 6,
    maxLength: 50,
  })
  password: string;

  @Property({
    isNumberArray: true,
  })
  permissions: number[];
}
