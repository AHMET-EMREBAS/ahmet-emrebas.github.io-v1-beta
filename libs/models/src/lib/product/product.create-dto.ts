import { BaseDTO, Property } from 'api-core';

export class ProductCreateDTO extends BaseDTO<ProductCreateDTO> {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
