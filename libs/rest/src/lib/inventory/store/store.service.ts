import { CrudService } from 'core';
import { Store, StoreView } from 'models/inventory/store';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService extends CrudService<Store, StoreView> {
  constructor(
    @InjectRepository(Store) mainRepo: Repository<Store>,
    @InjectRepository(StoreView) viewRepo: Repository<StoreView>
  ) {
    super(mainRepo, viewRepo);
  }
}
