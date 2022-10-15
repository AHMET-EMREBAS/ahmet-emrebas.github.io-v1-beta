import { RepositoryService } from 'api-core';
import { PricelevelView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PricelevelViewService extends RepositoryService<PricelevelView> {
  constructor(
    @InjectRepository(PricelevelView)
    pricelevelViewRepository: Repository<PricelevelView>
  ) {
    super(pricelevelViewRepository);
  }
}
