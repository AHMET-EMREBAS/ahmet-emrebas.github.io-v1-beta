import { GetQueryController, ManagePermission } from 'core';
import { Pricelevel, PricelevelView } from 'models/inventory/pricelevel';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PricelevelNames } from './pricelevel.names';
import { PricelevelService } from './pricelevel.service';

@ApiTags('[ Query / Relation ] Pricelevel')
@ManagePermission(PricelevelNames.SINGULAR_NAME)
@Controller(PricelevelNames.SINGULAR_NAME)
export class PricelevelQueryController extends GetQueryController<
  Pricelevel,
  PricelevelView
>(PricelevelNames.SINGULAR_NAME) {
  constructor(service: PricelevelService) {
    super(service);
  }
}
