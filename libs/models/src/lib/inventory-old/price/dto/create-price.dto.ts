import { Property } from 'swagger-property';

export class CreatePriceDto {
  @Property({
    name: 'price',

    id: 'price-price-input',

    type: 'decimal',

    valueType: 'number',

    inputType: 'currency-input',

    min: 0,

    required: true,
  })
  price: number;

  @Property({
    name: 'cost',

    id: 'price-cost-input',

    type: 'decimal',

    valueType: 'number',

    inputType: 'currency-input',

    min: 0,

    required: true,
  })
  cost: number;

  @Property({
    type: 'number',
    inputType: 'select',
    target: 'product',
  })
  product: number;
}
