import { Property } from 'core';

export class CreateBlogDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  blog: string;
}
