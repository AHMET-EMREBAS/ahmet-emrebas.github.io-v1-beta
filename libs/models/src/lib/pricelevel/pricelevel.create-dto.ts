import { BaseDTO, Property } from 'api-core';

export class PricelevelCreateDTO extends BaseDTO<PricelevelCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}
