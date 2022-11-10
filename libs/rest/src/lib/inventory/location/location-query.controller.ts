import { GetQueryController, ManagePermission } from 'core';
import { Location, LocationView } from 'models/inventory/location';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LocationNames } from './location.names';
import { LocationService } from './location.service';

@ApiTags('[ Query / Relation ] Location')
@ManagePermission(LocationNames.SINGULAR_NAME)
@Controller(LocationNames.SINGULAR_NAME)
export class LocationQueryController extends GetQueryController<
  Location,
  LocationView
>(LocationNames.SINGULAR_NAME) {
  constructor(service: LocationService) {
    super(service);
  }
}
