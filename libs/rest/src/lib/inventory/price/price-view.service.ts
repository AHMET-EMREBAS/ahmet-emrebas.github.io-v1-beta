import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PriceView } from 'models/inventory/price';

@Injectable()
export class PriceViewService extends ResourceViewService<PriceView> {
  constructor(@InjectRepository(PriceView) repo: Repository<PriceView>) {
    super(repo);
  }
}
