import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Sprint,
  SprintView,
} from '../entities';

@Injectable()
export class SprintService extends ResourceService<Sprint, SprintView> {
  constructor(
    @InjectRepository(Sprint) repo: Repository<Sprint>,
    @InjectRepository(SprintView) viewRepo: Repository<SprintView>
  ) {
    super(repo, viewRepo);
  }
}
