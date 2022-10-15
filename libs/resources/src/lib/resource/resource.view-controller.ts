import { QueryController } from 'api-core';
import { ResourceView } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ResourceViewService } from './resource.view-service';

@ApiTags(ResourceViewController.name)
@Controller()
export class ResourceViewController extends QueryController<ResourceView>({
  entity: ResourceView,
  singularName: 'viewresource',
  pluralName: 'viewresources',
}) {
  constructor(service: ResourceViewService) {
    super(service);
  }
}
