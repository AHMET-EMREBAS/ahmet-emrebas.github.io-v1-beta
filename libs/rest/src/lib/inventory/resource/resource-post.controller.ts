import { GetPostController, ManagePermission } from 'core';
import {
  CreateResourceDto,
  UpdateResourceDTO,
} from 'models/inventory/resource';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ResourceNames } from './resource.names';
import { ResourceService } from './resource.service';

@ApiTags('[ Post / Update ] Resource')
@ManagePermission(ResourceNames.SINGULAR_NAME)
@Controller(ResourceNames.SINGULAR_NAME)
export class ResourcePostController extends GetPostController(
  ResourceNames.SINGULAR_NAME,
  CreateResourceDto,
  UpdateResourceDTO
) {
  constructor(private readonly service: ResourceService) {
    super(service);
  }
}
