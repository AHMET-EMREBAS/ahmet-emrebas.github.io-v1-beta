import { RepositoryService } from 'api-core';
import { SampleView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SampleViewService extends RepositoryService<SampleView> {
  constructor(
    @InjectRepository(SampleView) sampleViewRepository: Repository<SampleView>
  ) {
    super(sampleViewRepository);
  }
}
