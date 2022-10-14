import { BaseDTO, Property } from 'api-core';

export class StoreCreateDTO extends BaseDTO<StoreCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}
