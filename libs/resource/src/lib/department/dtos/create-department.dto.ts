import { Property } from 'core';

export class CreateDepartmentDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  department: string;
}
