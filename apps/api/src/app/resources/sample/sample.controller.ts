import { CrudController } from 'api-core';
import {
  Sample,
  SampleCreateDTO,
  SampleUpdateDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SampleService } from './sample.service';

@ApiTags(SampleController.name)
@Controller()
export class SampleController extends CrudController<Sample>({
  entity: Sample,
  createDTO: SampleCreateDTO,
  updateDTO: SampleUpdateDTO,
  singularName: 'sample',
  pluralName: 'samples',
}) {
  constructor(service: SampleService) {
    super(service);
  }
}
