import { Property } from 'core';

export class CreatePriceDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  price: string;
}
