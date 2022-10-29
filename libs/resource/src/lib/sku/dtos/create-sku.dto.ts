import { Property } from 'core';

export class CreateSkuDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  sku: string;
}
