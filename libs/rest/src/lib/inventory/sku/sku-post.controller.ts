import { GetPostController, ManagePermission } from 'core';
import { CreateSkuDto, UpdateSkuDTO } from 'models/inventory/sku';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SkuNames } from './sku.names';
import { SkuService } from './sku.service';

@ApiTags('[ Post / Update ] Sku')
@ManagePermission(SkuNames.SINGULAR_NAME)
@Controller(SkuNames.SINGULAR_NAME)
export class SkuPostController extends GetPostController(
  SkuNames.SINGULAR_NAME,
  CreateSkuDto,
  UpdateSkuDTO
) {
  constructor(private readonly service: SkuService) {
    super(service);
  }
}
