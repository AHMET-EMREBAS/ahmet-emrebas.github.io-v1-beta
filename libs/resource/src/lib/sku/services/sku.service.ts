import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Sku,
  SkuView,
} from '../entities';

@Injectable()
export class SkuService extends ResourceService<Sku, SkuView> {
  constructor(
    @InjectRepository(Sku) repo: Repository<Sku>,
    @InjectRepository(SkuView) viewRepo: Repository<SkuView>
  ) {
    super(repo, viewRepo);
  }
}
