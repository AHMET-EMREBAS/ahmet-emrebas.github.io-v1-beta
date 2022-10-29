import { Property } from 'core';

export class CreateProductDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  product: string;
}
