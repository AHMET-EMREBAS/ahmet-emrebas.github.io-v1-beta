import { RepositoryService } from 'api-core';
import { Pricelevel } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PricelevelService extends RepositoryService<Pricelevel> {
  constructor(
    @InjectRepository(Pricelevel) pricelevelRepository: Repository<Pricelevel>
  ) {
    super(pricelevelRepository);
  }
}
