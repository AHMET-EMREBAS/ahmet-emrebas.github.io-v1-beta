import { BaseDTO, Property } from 'api-core';

export class CustomerCreateDTO extends BaseDTO<CustomerCreateDTO> {
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

  @Property({
    name: 'phone',
    valueType: 'string',
    type: 'text',
    unique: true,
    nullable: true,
  })
  phone: string;

  @Property({
    name: 'email',
    valueType: 'string',
    type: 'text',
    unique: true,
    nullable: true,
  })
  email: string;
}
