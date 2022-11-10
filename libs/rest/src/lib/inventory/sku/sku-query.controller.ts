import { GetQueryController, ManagePermission } from 'core';
import { Sku, SkuView } from 'models/inventory/sku';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SkuNames } from './sku.names';
import { SkuService } from './sku.service';

@ApiTags('[ Query / Relation ] Sku')
@ManagePermission(SkuNames.SINGULAR_NAME)
@Controller(SkuNames.SINGULAR_NAME)
export class SkuQueryController extends GetQueryController<Sku, SkuView>(
  SkuNames.SINGULAR_NAME
) {
  constructor(service: SkuService) {
    super(service);
  }
}
