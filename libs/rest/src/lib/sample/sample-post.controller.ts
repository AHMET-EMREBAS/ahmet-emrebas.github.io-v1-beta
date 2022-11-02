import {
  GetPostController,
  ManagePermission,
} from 'core';
import {
  CreateSampleDto,
  UpdateSampleDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SampleNames } from './sample.names';
import { SampleService } from './sample.service';

@ApiTags('[ Post / Update ] Sample')
@ManagePermission(SampleNames.SINGULAR_NAME)
@Controller(SampleNames.SINGULAR_NAME)
export class SamplePostController extends GetPostController(
  SampleNames.SINGULAR_NAME,
  CreateSampleDto,
  UpdateSampleDTO
) {
  constructor(private readonly service: SampleService) {
    super(service);
  }
}
