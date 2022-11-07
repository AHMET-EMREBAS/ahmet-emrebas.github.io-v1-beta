import { GetPostController, ManagePermission } from 'core';
import { CreatePriceDto, UpdatePriceDTO } from 'models/inventory/price';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PriceNames } from './price.names';
import { PriceService } from './price.service';

@ApiTags('[ Post / Update ] Price')
@ManagePermission(PriceNames.SINGULAR_NAME)
@Controller(PriceNames.SINGULAR_NAME)
export class PricePostController extends GetPostController(
  PriceNames.SINGULAR_NAME,
  CreatePriceDto,
  UpdatePriceDTO
) {
  constructor(private readonly service: PriceService) {
    super(service);
  }
}
