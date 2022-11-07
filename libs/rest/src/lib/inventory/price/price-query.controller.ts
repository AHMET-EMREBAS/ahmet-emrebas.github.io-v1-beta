import { GetQueryController, ManagePermission } from 'core';
import { Price, PriceView } from 'models/inventory/price';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PriceNames } from './price.names';
import { PriceService } from './price.service';

@ApiTags('[ Query / Relation ] Price')
@ManagePermission(PriceNames.SINGULAR_NAME)
@Controller(PriceNames.SINGULAR_NAME)
export class PriceQueryController extends GetQueryController<Price, PriceView>(
  PriceNames.SINGULAR_NAME
) {
  constructor(service: PriceService) {
    super(service);
  }
}
