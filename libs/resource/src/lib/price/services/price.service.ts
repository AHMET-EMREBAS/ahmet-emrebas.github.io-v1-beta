import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Price,
  PriceView,
} from '../entities';

@Injectable()
export class PriceService extends ResourceService<Price, PriceView> {
  constructor(
    @InjectRepository(Price) repo: Repository<Price>,
    @InjectRepository(PriceView) viewRepo: Repository<PriceView>
  ) {
    super(repo, viewRepo);
  }
}
