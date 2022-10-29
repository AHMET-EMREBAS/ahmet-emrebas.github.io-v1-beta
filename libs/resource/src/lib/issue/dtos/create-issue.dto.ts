import { Property } from 'core';

export class CreateIssueDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  issue: string;
}
