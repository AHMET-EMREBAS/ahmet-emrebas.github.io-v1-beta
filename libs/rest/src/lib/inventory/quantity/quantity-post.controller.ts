import { GetPostController, ManagePermission } from 'core';
import {
  CreateQuantityDto,
  UpdateQuantityDTO,
} from 'models/inventory/quantity';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QuantityNames } from './quantity.names';
import { QuantityService } from './quantity.service';

@ApiTags('[ Post / Update ] Quantity')
@ManagePermission(QuantityNames.SINGULAR_NAME)
@Controller(QuantityNames.SINGULAR_NAME)
export class QuantityPostController extends GetPostController(
  QuantityNames.SINGULAR_NAME,
  CreateQuantityDto,
  UpdateQuantityDTO
) {
  constructor(private readonly service: QuantityService) {
    super(service);
  }
}
