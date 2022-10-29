import { Property } from 'core';

export class CreateCommentDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  comment: string;
}
