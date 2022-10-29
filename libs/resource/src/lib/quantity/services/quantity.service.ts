import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Quantity,
  QuantityView,
} from '../entities';

@Injectable()
export class QuantityService extends ResourceService<Quantity, QuantityView> {
  constructor(
    @InjectRepository(Quantity) repo: Repository<Quantity>,
    @InjectRepository(QuantityView) viewRepo: Repository<QuantityView>
  ) {
    super(repo, viewRepo);
  }
}
