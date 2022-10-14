import { BaseDTO, Property } from 'api-core';

export class QuantityCreateDTO extends BaseDTO<QuantityCreateDTO> {
  @Property({
    name: 'quantity',
    valueType: 'number',
    type: 'number',
    unique: false,
  })
  quantity: number;
}
