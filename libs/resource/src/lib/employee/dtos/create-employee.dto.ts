import { Property } from 'core';

export class CreateEmployeeDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  employee: string;
}
