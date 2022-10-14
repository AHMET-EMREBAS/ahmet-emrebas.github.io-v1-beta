import { BaseDTO, Property } from 'api-core';

export class ProductCreateDTO extends BaseDTO<ProductCreateDTO> {
  @Property({
    name: 'barcode',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 11,
    maxLength: 13,
  })
  barcode: string;

  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;

  @Property({
    name: 'description',
    valueType: 'string',
    type: 'text',
    nullable: true,
    maxLength: 400,
    unique: false,
  })
  description: string;
}
