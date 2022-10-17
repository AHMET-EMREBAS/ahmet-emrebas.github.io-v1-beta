import { BaseDTO, Property } from 'api-core';

export class CreditCreateDTO extends BaseDTO<CreditCreateDTO> {
  @Property({
    name: 'credit',
    valueType: 'any',
    type: 'numeric',
    unique: false,
  })
  credit: any;
}
