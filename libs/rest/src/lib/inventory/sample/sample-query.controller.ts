import { GetQueryController, ManagePermission } from 'core';
import { Sample, SampleView } from 'models/inventory/sample';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SampleNames } from './sample.names';
import { SampleService } from './sample.service';

@ApiTags('[ Query / Relation ] Sample')
@ManagePermission(SampleNames.SINGULAR_NAME)
@Controller(SampleNames.SINGULAR_NAME)
export class SampleQueryController extends GetQueryController<
  Sample,
  SampleView
>(SampleNames.SINGULAR_NAME) {
  constructor(service: SampleService) {
    super(service);
  }
}
