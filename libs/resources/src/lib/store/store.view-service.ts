import { RepositoryService } from 'api-core';
import { StoreView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreViewService extends RepositoryService<StoreView> {
  constructor(
    @InjectRepository(StoreView) storeViewRepository: Repository<StoreView>
  ) {
    super(storeViewRepository);
  }
}
