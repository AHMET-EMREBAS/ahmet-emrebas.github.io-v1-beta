import { GetPostController, ManagePermission } from 'core';
import { CreateFeatureDto, UpdateFeatureDTO } from 'models/inventory/feature';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FeatureNames } from './feature.names';
import { FeatureService } from './feature.service';

@ApiTags('[ Post / Update ] Feature')
@ManagePermission(FeatureNames.SINGULAR_NAME)
@Controller(FeatureNames.SINGULAR_NAME)
export class FeaturePostController extends GetPostController(
  FeatureNames.SINGULAR_NAME,
  CreateFeatureDto,
  UpdateFeatureDTO
) {
  constructor(private readonly service: FeatureService) {
    super(service);
  }
}
