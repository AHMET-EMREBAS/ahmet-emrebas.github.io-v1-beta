import { Property } from 'swagger-property';

export class CreatePriceDto {
  @Property({
    min: 1,
    max: 9999999999999,
  })
  price: currency;

  @Property({
    min: 0,
    max: 99999999999999,
  })
  cost: currency;

  @Property({
    isNumber: true,
  })
  sku: number;

  @Property({
    isNumber: true,
  })
  pricelevel: number;
}
