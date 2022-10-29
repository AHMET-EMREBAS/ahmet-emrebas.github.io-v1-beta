import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Promotion,
  PromotionView,
} from '../entities';

@Injectable()
export class PromotionService extends ResourceService<Promotion, PromotionView> {
  constructor(
    @InjectRepository(Promotion) repo: Repository<Promotion>,
    @InjectRepository(PromotionView) viewRepo: Repository<PromotionView>
  ) {
    super(repo, viewRepo);
  }
}
