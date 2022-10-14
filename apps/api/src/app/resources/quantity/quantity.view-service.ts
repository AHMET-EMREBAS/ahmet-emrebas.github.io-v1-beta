import { RepositoryService } from 'api-core';
import { QuantityView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuantityViewService extends RepositoryService<QuantityView> {
  constructor(
    @InjectRepository(QuantityView)
    quantityViewRepository: Repository<QuantityView>
  ) {
    super(quantityViewRepository);
  }
}
