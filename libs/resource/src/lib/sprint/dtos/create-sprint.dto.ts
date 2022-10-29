import { Property } from 'core';

export class CreateSprintDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  sprint: string;
}
