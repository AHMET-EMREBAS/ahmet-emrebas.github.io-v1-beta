import { BaseDTO, Property } from 'api-core';

export class PriceCreateDTO extends BaseDTO<PriceCreateDTO> {
  @Property({
    name: 'cost',
    valueType: 'any',
    type: 'numeric',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  cost: any;

  @Property({
    name: 'price',
    valueType: 'any',
    type: 'numeric',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  price: any;

  @Property({
    name: 'usedCost',
    valueType: 'any',
    type: 'numeric',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  usedCost: any;

  @Property({
    name: 'usedPrice',
    valueType: 'any',
    type: 'numeric',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  usedPrice: any;
}
