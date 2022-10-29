import { Property } from 'core';

export class CreateNoteDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  note: string;
}
