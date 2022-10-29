import { Property } from 'core';

export class CreateProjectDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  project: string;
}
