import { BaseDTO, Property } from 'api-core';

export class PermissionCreateDTO extends BaseDTO<PermissionCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    transform: 'json',
  })
  name: string;
}
