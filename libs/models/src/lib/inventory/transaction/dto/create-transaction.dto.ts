import { Property } from 'swagger-property';

export class CreateTransactionDto {
  @Property({})
  complete: enum;

  @Property({
    isNumberArray: true,
  })
  orders: number[];
}
