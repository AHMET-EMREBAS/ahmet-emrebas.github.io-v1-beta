import { CrudService } from 'core';
import { Pricelevel, PricelevelView } from 'models/inventory/pricelevel';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PricelevelService extends CrudService<Pricelevel, PricelevelView> {
  constructor(
    @InjectRepository(Pricelevel) mainRepo: Repository<Pricelevel>,
    @InjectRepository(PricelevelView) viewRepo: Repository<PricelevelView>
  ) {
    super(mainRepo, viewRepo);
  }
}
