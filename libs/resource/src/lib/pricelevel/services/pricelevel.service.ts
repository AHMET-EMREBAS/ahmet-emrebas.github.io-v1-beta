import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Pricelevel,
  PricelevelView,
} from '../entities';

@Injectable()
export class PricelevelService extends ResourceService<Pricelevel, PricelevelView> {
  constructor(
    @InjectRepository(Pricelevel) repo: Repository<Pricelevel>,
    @InjectRepository(PricelevelView) viewRepo: Repository<PricelevelView>
  ) {
    super(repo, viewRepo);
  }
}
