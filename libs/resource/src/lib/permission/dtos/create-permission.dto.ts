import { Property } from 'core';

export class CreatePermissionDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  permission: string;
}
