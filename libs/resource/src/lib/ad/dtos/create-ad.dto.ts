import { Property } from 'core';

export class CreateAdDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  ad: string;
}
