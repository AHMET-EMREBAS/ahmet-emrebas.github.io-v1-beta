import { Property } from 'core';

export class CreateLogDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  log: string;
}
