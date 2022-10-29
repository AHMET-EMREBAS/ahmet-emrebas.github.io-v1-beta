import { Property } from 'core';

export class CreateArticleDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  article: string;
}
