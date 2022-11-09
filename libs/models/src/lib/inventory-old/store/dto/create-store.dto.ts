import { Property } from 'swagger-property';

export class CreateStoreDto {
  @Property({
    name: 'name',

    id: 'store-name-input',

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
    type: 'number',
    inputType: 'select',
    target: 'pricelevel',
  })
  pricelevel: number;
}
