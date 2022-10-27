import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SampleView } from './entities';
import { Sample } from './entities/sample.entity';

@Injectable()
export class SampleService extends ResourceService<Sample, SampleView> {
  constructor(
    @InjectRepository(Sample) repo: Repository<Sample>,
    @InjectRepository(SampleView) viewRepo: Repository<SampleView>
  ) {
    super(repo, viewRepo);
  }
}
