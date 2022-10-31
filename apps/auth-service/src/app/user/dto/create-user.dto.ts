import { Property } from 'swagger-property';

export class CreateUserDto {
  @Property({
    type: 'string',
    isEmail: true,
  })
  username: string;

  @Property({
    type: 'string',
    isPassword: true,
  })
  password: string;
}
