import { BaseDTO, Property } from 'api-core';

export class UserCreateDTO extends BaseDTO<UserCreateDTO> {
  @Property({
    name: 'username',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  username: string;

  @Property({
    name: 'password',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  password: string;
}
