import { CrudService } from 'core';
import { Feature, FeatureView } from 'models/inventory/feature';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeatureService extends CrudService<Feature, FeatureView> {
  constructor(
    @InjectRepository(Feature) mainRepo: Repository<Feature>,
    @InjectRepository(FeatureView) viewRepo: Repository<FeatureView>
  ) {
    super(mainRepo, viewRepo);
  }
}
