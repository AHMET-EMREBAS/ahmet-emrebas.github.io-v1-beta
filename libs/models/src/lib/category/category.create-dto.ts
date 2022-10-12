import { BaseDTO, Property } from 'api-core';

export class CategoryCreateDTO extends BaseDTO<CategoryCreateDTO> {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
