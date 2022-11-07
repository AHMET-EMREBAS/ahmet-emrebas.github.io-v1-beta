import { GetPostController, ManagePermission } from 'core';
import {
  CreatePricelevelDto,
  UpdatePricelevelDTO,
} from 'models/inventory/pricelevel';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PricelevelNames } from './pricelevel.names';
import { PricelevelService } from './pricelevel.service';

@ApiTags('[ Post / Update ] Pricelevel')
@ManagePermission(PricelevelNames.SINGULAR_NAME)
@Controller(PricelevelNames.SINGULAR_NAME)
export class PricelevelPostController extends GetPostController(
  PricelevelNames.SINGULAR_NAME,
  CreatePricelevelDto,
  UpdatePricelevelDTO
) {
  constructor(private readonly service: PricelevelService) {
    super(service);
  }
}
