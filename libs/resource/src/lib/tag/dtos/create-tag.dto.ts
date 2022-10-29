import { Property } from 'core';

export class CreateTagDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  tag: string;
}
