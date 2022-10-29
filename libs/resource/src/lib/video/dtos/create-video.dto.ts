import { Property } from 'core';

export class CreateVideoDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  video: string;
}
