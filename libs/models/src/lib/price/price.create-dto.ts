import { BaseDTO, Property } from 'api-core';

export class PriceCreateDTO extends BaseDTO<PriceCreateDTO> {
  @Property({
    name: 'cost',
    valueType: 'number',
    type: 'number',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  cost: number;

  @Property({
    name: 'price',
    valueType: 'number',
    type: 'number',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  price: number;

  @Property({
    name: 'usedCost',
    valueType: 'number',
    type: 'number',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  usedCost: number;

  @Property({
    name: 'usedPrice',
    valueType: 'number',
    type: 'number',
    inputType: 'currency',
    unique: true,
    min: 0,
    default: 0,
  })
  usedPrice: number;
}
