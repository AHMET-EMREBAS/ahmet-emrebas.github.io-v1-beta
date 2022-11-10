import { Property } from 'swagger-property';

export class CreateOrderDto {
  @Property({
    min: 0,
    max: 999999999999,
  })
  quantity: string;

  @Property({
    min: 0,
    max: 999999999999,
  })
  unitprice: number;

  @Property({
    min: 1,
    max: 100,
  })
  discount: number;

  @Property({})
  taxExempt: boolean;

  @Property({
    isNumber: true,
  })
  sku: number;

  @Property({
    isNumber: true,
  })
  store: number;

  @Property({
    isNumber: true,
  })
  transaction: number;
}
