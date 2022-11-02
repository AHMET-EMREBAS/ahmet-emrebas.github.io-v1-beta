import {
  GetPostController,
  ManagePermission,
} from 'core';
import {
  CreateSubDto,
  UpdateSubDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SubNames } from './sub.names';
import { SubService } from './sub.service';

@ApiTags('[ Post / Update ] Sub')
@ManagePermission(SubNames.SINGULAR_NAME)
@Controller(SubNames.SINGULAR_NAME)
export class SubPostController extends GetPostController(
  SubNames.SINGULAR_NAME,
  CreateSubDto,
  UpdateSubDTO
) {
  constructor(private readonly service: SubService) {
    super(service);
  }
}
