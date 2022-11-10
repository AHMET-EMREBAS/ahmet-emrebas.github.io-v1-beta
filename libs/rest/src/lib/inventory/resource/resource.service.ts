import { CrudService } from 'core';
import { Resource, ResourceView } from 'models/inventory/resource';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResourceService extends CrudService<Resource, ResourceView> {
  constructor(
    @InjectRepository(Resource) mainRepo: Repository<Resource>,
    @InjectRepository(ResourceView) viewRepo: Repository<ResourceView>
  ) {
    super(mainRepo, viewRepo);
  }
}
