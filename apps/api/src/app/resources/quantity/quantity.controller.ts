import { CrudController } from 'api-core';
import {
  Quantity,
  QuantityCreateDTO,
  QuantityUpdateDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QuantityService } from './quantity.service';

@ApiTags(QuantityController.name)
@Controller()
export class QuantityController extends CrudController<Quantity>({
  entity: Quantity,
  createDTO: QuantityCreateDTO,
  updateDTO: QuantityUpdateDTO,
  singularName: 'quantity',
  pluralName: 'quantities',
}) {
  constructor(service: QuantityService) {
    super(service);
  }
}
