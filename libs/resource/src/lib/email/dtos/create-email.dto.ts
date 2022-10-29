import { Property } from 'core';

export class CreateEmailDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  email: string;
}
