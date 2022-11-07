import { GetQueryController, ManagePermission } from 'core';
import { Store, StoreView } from 'models/inventory/store';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StoreNames } from './store.names';
import { StoreService } from './store.service';

@ApiTags('[ Query / Relation ] Store')
@ManagePermission(StoreNames.SINGULAR_NAME)
@Controller(StoreNames.SINGULAR_NAME)
export class StoreQueryController extends GetQueryController<Store, StoreView>(
  StoreNames.SINGULAR_NAME
) {
  constructor(service: StoreService) {
    super(service);
  }
}
