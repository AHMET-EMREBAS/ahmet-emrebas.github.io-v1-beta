import { RepositoryService } from 'api-core';
import { PriceView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PriceViewService extends RepositoryService<PriceView> {
  constructor(
    @InjectRepository(PriceView) priceViewRepository: Repository<PriceView>
  ) {
    super(priceViewRepository);
  }
}
