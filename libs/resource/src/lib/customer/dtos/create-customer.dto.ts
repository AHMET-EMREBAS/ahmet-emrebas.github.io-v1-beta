import { Property } from 'core';

export class CreateCustomerDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  customer: string;
}
