import { CrudService } from 'core';
import { Sku, SkuView } from 'models/inventory/sku';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SkuService extends CrudService<Sku, SkuView> {
  constructor(
    @InjectRepository(Sku) mainRepo: Repository<Sku>,
    @InjectRepository(SkuView) viewRepo: Repository<SkuView>
  ) {
    super(mainRepo, viewRepo);
  }
}
