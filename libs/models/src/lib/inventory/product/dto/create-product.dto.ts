import { Property } from 'swagger-property';

export class CreateProductDto {
  @Property({
    name: 'name',

    id: 'product-name-input',

    type: 'string',

    valueType: 'string',

    inputType: 'text-input',

    minLength: 3,

    maxLength: 10,

    required: true,

    unique: true,
  })
  name: string;

  @Property({
    name: 'description',

    id: 'product-description-input',

    type: 'string',

    valueType: 'string',

    inputType: 'text-input',

    minLength: 3,

    maxLength: 400,

    required: true,
  })
  description: string;

  @Property({
    type: 'number',
    inputType: 'select',
    target: 'category',
  })
  category: number;
}
