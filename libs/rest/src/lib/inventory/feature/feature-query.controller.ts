import { GetQueryController, ManagePermission } from 'core';
import { Feature, FeatureView } from 'models/inventory/feature';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FeatureNames } from './feature.names';
import { FeatureService } from './feature.service';

@ApiTags('[ Query / Relation ] Feature')
@ManagePermission(FeatureNames.SINGULAR_NAME)
@Controller(FeatureNames.SINGULAR_NAME)
export class FeatureQueryController extends GetQueryController<
  Feature,
  FeatureView
>(FeatureNames.SINGULAR_NAME) {
  constructor(service: FeatureService) {
    super(service);
  }
}
