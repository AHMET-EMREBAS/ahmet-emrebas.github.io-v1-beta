import { Property } from 'core';

export class CreateStoreDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  store: string;
}
