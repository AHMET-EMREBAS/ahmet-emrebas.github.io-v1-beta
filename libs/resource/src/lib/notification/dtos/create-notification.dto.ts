import { Property } from 'core';

export class CreateNotificationDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  notification: string;
}
