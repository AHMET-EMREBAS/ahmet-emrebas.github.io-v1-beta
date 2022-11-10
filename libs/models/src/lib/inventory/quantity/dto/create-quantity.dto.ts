import { Property } from 'swagger-property';

export class CreateQuantityDto {
  @Property({
    min: -200,
    max: 999999999999,
  })
  quantity: string;

  @Property({
    isNumber: true,
  })
  sku: number;

  @Property({
    isNumber: true,
  })
  store: number;
}
