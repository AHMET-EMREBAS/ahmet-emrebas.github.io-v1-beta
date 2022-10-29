import { Property } from 'core';

export class CreatePromotionDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  promotion: string;
}
