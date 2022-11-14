import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Pricelevel } from 'models/inventory/pricelevel';

@Injectable()
export class PricelevelService extends ResourceService<Pricelevel> {
  constructor(@InjectRepository(Pricelevel) repo: Repository<Pricelevel>) {
    super(repo);
  }
}
