import { Property } from 'core';

export class CreateImgDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  img: string;
}
