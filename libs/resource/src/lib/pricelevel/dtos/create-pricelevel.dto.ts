import { Property } from 'core';

export class CreatePricelevelDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  pricelevel: string;
}
