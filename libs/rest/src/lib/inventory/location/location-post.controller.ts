import { GetPostController, ManagePermission } from 'core';
import {
  CreateLocationDto,
  UpdateLocationDTO,
} from 'models/inventory/location';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LocationNames } from './location.names';
import { LocationService } from './location.service';

@ApiTags('[ Post / Update ] Location')
@ManagePermission(LocationNames.SINGULAR_NAME)
@Controller(LocationNames.SINGULAR_NAME)
export class LocationPostController extends GetPostController(
  LocationNames.SINGULAR_NAME,
  CreateLocationDto,
  UpdateLocationDTO
) {
  constructor(private readonly service: LocationService) {
    super(service);
  }
}
