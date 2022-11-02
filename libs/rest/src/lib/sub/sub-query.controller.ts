import {
  GetQueryController,
  ManagePermission,
} from 'core';
import {
  Sub,
  SubView,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SubNames } from './sub.names';
import { SubService } from './sub.service';

@ApiTags('[ Query / Relation ] Sub')
@ManagePermission(SubNames.SINGULAR_NAME)
@Controller(SubNames.SINGULAR_NAME)
export class SubQueryController extends GetQueryController<
  Sub,
  SubView
>(SubNames.SINGULAR_NAME) {
  constructor(service: SubService) {
    super(service);
  }
}
