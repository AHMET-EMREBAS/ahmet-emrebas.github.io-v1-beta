import { Property } from 'swagger-property';

export class CreateSkuDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  sku: string;

  @Property({
    minLength: 10,
    maxLength: 13,
  })
  barcode: string;

  @Property({
    minLength: 3,
    maxLength: 50,
  })
  description: string;

  @Property({
    isNumberArray: true,
  })
  variants: number[];

  @Property({
    isNumber: true,
  })
  product: number;
}
