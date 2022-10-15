import { CrudController } from 'api-core';
import { Resource, ResourceCreateDTO, ResourceUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ResourceService } from './resource.service';

@ApiTags(ResourceController.name)
@Controller()
export class ResourceController extends CrudController<Resource>({
  entity: Resource,
  createDTO: ResourceCreateDTO,
  updateDTO: ResourceUpdateDTO,
  singularName: 'resource',
  pluralName: 'resources',
}) {
  constructor(service: ResourceService) {
    super(service);
  }
}
