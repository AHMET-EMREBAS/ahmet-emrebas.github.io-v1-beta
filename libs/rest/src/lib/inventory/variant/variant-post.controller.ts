import { GetPostController, ManagePermission } from 'core';
import { CreateVariantDto, UpdateVariantDTO } from 'models/inventory/variant';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { VariantNames } from './variant.names';
import { VariantService } from './variant.service';

@ApiTags('[ Post / Update ] Variant')
@ManagePermission(VariantNames.SINGULAR_NAME)
@Controller(VariantNames.SINGULAR_NAME)
export class VariantPostController extends GetPostController(
  VariantNames.SINGULAR_NAME,
  CreateVariantDto,
  UpdateVariantDTO
) {
  constructor(private readonly service: VariantService) {
    super(service);
  }
}
