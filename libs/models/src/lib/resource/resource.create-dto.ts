import { BaseDTO, Property } from 'api-core';

export class ResourceCreateDTO extends BaseDTO<ResourceCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}
