import { Property } from 'core';

export class CreateRoleDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  role: string;
}
