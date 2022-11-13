import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Sample } from './entity/sample.entity';

@Injectable()
export class SampleService extends ResourceService<Sample> {
  constructor(@InjectRepository(Sample) repo: Repository<Sample>) {
    super(repo);
  }
}
