import { CrudController } from 'api-core';
import { Price, PriceCreateDTO, PriceUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PriceService } from './price.service';

@ApiTags(PriceController.name)
@Controller()
export class PriceController extends CrudController<Price>({
  entity: Price,
  createDTO: PriceCreateDTO,
  updateDTO: PriceUpdateDTO,
  singularName: 'price',
  pluralName: 'prices',
}) {
  constructor(service: PriceService) {
    super(service);
  }
}
