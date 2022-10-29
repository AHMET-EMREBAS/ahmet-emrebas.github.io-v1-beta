import { Property } from 'core';

export class CreateUserDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  user: string;
}
