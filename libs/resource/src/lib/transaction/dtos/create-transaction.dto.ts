import { Property } from 'core';

export class CreateTransactionDto {
  @Property({
    type: 'string',
    inputType: 'text',
    unique: true,
    minLength: 3,
    maxLength: 50,
  })
  transaction: string;
}
