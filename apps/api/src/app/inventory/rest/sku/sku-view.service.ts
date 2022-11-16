import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SkuView } from '../../models/sku';

@Injectable()
export class SkuViewService extends ResourceViewService<SkuView> {
  constructor(@InjectRepository(SkuView) repo: Repository<SkuView>) {
    super(repo);
  }
}
