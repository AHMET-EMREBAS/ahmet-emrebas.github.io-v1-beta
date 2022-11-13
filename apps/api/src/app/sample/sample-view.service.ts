import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SampleView } from './entity/sample-view.entity';

@Injectable()
export class SampleViewService extends ResourceViewService<SampleView> {
  constructor(@InjectRepository(SampleView) repo: Repository<SampleView>) {
    super(repo);
  }
}
