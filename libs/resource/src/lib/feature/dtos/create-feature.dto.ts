import { Property } from 'core';

export class CreateFeatureDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  feature: string;
}
