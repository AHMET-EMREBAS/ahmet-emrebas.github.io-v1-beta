import { Property } from 'core';

export class CreateSampleDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  sample: string;
}
