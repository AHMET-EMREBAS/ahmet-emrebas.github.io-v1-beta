import { CrudService } from 'core';
import { Sample, SampleView } from 'models/inventory/sample';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SampleService extends CrudService<Sample, SampleView> {
  constructor(
    @InjectRepository(Sample) mainRepo: Repository<Sample>,
    @InjectRepository(SampleView) viewRepo: Repository<SampleView>
  ) {
    super(mainRepo, viewRepo);
  }
}
