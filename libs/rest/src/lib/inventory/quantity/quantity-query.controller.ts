import { GetQueryController, ManagePermission } from 'core';
import { Quantity, QuantityView } from 'models/inventory/quantity';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QuantityNames } from './quantity.names';
import { QuantityService } from './quantity.service';

@ApiTags('[ Query / Relation ] Quantity')
@ManagePermission(QuantityNames.SINGULAR_NAME)
@Controller(QuantityNames.SINGULAR_NAME)
export class QuantityQueryController extends GetQueryController<
  Quantity,
  QuantityView
>(QuantityNames.SINGULAR_NAME) {
  constructor(service: QuantityService) {
    super(service);
  }
}
