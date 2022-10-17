import { BaseDTO, Property } from 'api-core';

export class CategoryCreateDTO extends BaseDTO<CategoryCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}