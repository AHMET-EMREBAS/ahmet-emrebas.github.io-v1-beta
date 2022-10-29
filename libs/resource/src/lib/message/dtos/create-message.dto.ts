import { Property } from 'core';

export class CreateMessageDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  message: string;
}
