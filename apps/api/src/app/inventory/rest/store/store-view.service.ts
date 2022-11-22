import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { StoreView } from './entity';

@Injectable()
export class StoreViewService extends ResourceViewService<StoreView> {
  constructor(@InjectRepository(StoreView) repo: Repository<StoreView>) {
    super(repo);
  }
}
