import { RepositoryService } from 'api-core';
import { Resource } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResourceService extends RepositoryService<Resource> {
  constructor(
    @InjectRepository(Resource) resourceRepository: Repository<Resource>
  ) {
    super(resourceRepository);
  }
}
