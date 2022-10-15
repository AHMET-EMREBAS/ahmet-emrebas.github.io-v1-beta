import { BaseDTO, Property } from 'api-core';

export class CreditCreateDTO extends BaseDTO<CreditCreateDTO> {
  @Property({
    name: 'credit',
    valueType: 'any',
    type: 'numeric',
    inputType: 'number',
    min: 0,
    unique: false,
  })
  credit: any;
}
