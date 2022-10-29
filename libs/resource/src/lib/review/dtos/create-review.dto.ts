import { Property } from 'core';

export class CreateReviewDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  review: string;
}
