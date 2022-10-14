import { BaseDTO, Property } from 'api-core';

export class QuantityCreateDTO extends BaseDTO<QuantityCreateDTO> {
  @Property({ name: 'quantity', valueType: 'any', type: 'int', unique: false })
  quantity: any;
}
