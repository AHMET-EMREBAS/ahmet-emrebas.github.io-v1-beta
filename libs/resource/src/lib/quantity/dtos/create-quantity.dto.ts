import { Property } from 'core';

export class CreateQuantityDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  quantity: string;
}
