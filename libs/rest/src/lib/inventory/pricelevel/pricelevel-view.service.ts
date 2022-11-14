import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PricelevelView } from 'models/inventory/pricelevel';

@Injectable()
export class PricelevelViewService extends ResourceViewService<PricelevelView> {
  constructor(
    @InjectRepository(PricelevelView) repo: Repository<PricelevelView>
  ) {
    super(repo);
  }
}
