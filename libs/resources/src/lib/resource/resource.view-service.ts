import { RepositoryService } from 'api-core';
import { ResourceView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResourceViewService extends RepositoryService<ResourceView> {
  constructor(
    @InjectRepository(ResourceView)
    resourceViewRepository: Repository<ResourceView>
  ) {
    super(resourceViewRepository);
  }
}
