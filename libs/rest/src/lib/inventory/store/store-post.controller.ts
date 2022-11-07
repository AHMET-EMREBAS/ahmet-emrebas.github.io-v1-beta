import { GetPostController, ManagePermission } from 'core';
import { CreateStoreDto, UpdateStoreDTO } from 'models/inventory/store';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StoreNames } from './store.names';
import { StoreService } from './store.service';

@ApiTags('[ Post / Update ] Store')
@ManagePermission(StoreNames.SINGULAR_NAME)
@Controller(StoreNames.SINGULAR_NAME)
export class StorePostController extends GetPostController(
  StoreNames.SINGULAR_NAME,
  CreateStoreDto,
  UpdateStoreDTO
) {
  constructor(private readonly service: StoreService) {
    super(service);
  }
}
