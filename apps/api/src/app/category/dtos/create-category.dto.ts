import { Property } from 'core';

export class CreateCategoryDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  category: string;
}
