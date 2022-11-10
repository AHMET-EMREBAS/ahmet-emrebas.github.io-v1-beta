import { GetQueryController, ManagePermission } from 'core';
import { Variant, VariantView } from 'models/inventory/variant';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { VariantNames } from './variant.names';
import { VariantService } from './variant.service';

@ApiTags('[ Query / Relation ] Variant')
@ManagePermission(VariantNames.SINGULAR_NAME)
@Controller(VariantNames.SINGULAR_NAME)
export class VariantQueryController extends GetQueryController<
  Variant,
  VariantView
>(VariantNames.SINGULAR_NAME) {
  constructor(service: VariantService) {
    super(service);
  }
}
