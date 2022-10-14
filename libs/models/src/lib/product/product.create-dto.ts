import { BaseDTO, Property } from 'api-core';

export class ProductCreateDTO extends BaseDTO<ProductCreateDTO> {
  @Property({ name: 'name', valueType: 'string', type: 'text', unique: true })
  name: string;

  @Property({
    name: 'description',
    valueType: 'string',
    type: 'text',
    unique: false,
  })
  description: string;
}
