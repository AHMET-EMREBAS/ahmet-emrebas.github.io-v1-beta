import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Feature,
  FeatureView,
} from '../entities';

@Injectable()
export class FeatureService extends ResourceService<Feature, FeatureView> {
  constructor(
    @InjectRepository(Feature) repo: Repository<Feature>,
    @InjectRepository(FeatureView) viewRepo: Repository<FeatureView>
  ) {
    super(repo, viewRepo);
  }
}
