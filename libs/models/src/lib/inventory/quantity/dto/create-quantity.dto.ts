import { Property } from 'swagger-property';

export class CreateQuantityDto {
  @Property({
    name: 'quantity',

    id: 'quantity-quantity-input',

    type: 'int',

    valueType: 'number',

    inputType: 'number-input',

    required: true,
  })
  quantity: number;

  @Property({
    type: 'number',
    inputType: 'select',
    target: 'product',
  })
  product: number;

  @Property({
    type: 'number',
    inputType: 'select',
    target: 'store',
  })
  store: number;
}
