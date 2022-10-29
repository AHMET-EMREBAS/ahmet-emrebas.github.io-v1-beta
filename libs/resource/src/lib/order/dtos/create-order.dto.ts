import { Property } from 'core';

export class CreateOrderDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  order: string;
}
