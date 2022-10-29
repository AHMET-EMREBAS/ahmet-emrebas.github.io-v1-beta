import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Store,
  StoreView,
} from '../entities';

@Injectable()
export class StoreService extends ResourceService<Store, StoreView> {
  constructor(
    @InjectRepository(Store) repo: Repository<Store>,
    @InjectRepository(StoreView) viewRepo: Repository<StoreView>
  ) {
    super(repo, viewRepo);
  }
}
