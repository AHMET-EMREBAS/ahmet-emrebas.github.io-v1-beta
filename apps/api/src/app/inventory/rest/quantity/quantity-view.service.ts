import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QuantityView } from './entity';

@Injectable()
export class QuantityViewService extends ResourceViewService<QuantityView> {
  constructor(@InjectRepository(QuantityView) repo: Repository<QuantityView>) {
    super(repo);
  }
}
