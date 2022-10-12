import { RepositoryService } from 'api-core';
import { Sample } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SampleService extends RepositoryService<Sample> {
  constructor(@InjectRepository(Sample) sampleRepository: Repository<Sample>) {
    super(sampleRepository);
  }
}
