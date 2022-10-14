import { RepositoryService } from 'api-core';
import { Store } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService extends RepositoryService<Store> {
  constructor(@InjectRepository(Store) storeRepository: Repository<Store>) {
    super(storeRepository);
  }
}
