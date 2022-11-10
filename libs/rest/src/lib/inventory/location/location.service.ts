import { CrudService } from 'core';
import { Location, LocationView } from 'models/inventory/location';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationService extends CrudService<Location, LocationView> {
  constructor(
    @InjectRepository(Location) mainRepo: Repository<Location>,
    @InjectRepository(LocationView) viewRepo: Repository<LocationView>
  ) {
    super(mainRepo, viewRepo);
  }
}
