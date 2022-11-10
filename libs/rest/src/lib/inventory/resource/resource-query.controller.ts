import { GetQueryController, ManagePermission } from 'core';
import { Resource, ResourceView } from 'models/inventory/resource';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ResourceNames } from './resource.names';
import { ResourceService } from './resource.service';

@ApiTags('[ Query / Relation ] Resource')
@ManagePermission(ResourceNames.SINGULAR_NAME)
@Controller(ResourceNames.SINGULAR_NAME)
export class ResourceQueryController extends GetQueryController<
  Resource,
  ResourceView
>(ResourceNames.SINGULAR_NAME) {
  constructor(service: ResourceService) {
    super(service);
  }
}
