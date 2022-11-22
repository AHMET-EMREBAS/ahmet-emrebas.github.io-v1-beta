import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Sku } from './entity';

@Injectable()
export class SkuService extends ResourceService<Sku> {
  constructor(@InjectRepository(Sku) repo: Repository<Sku>) {
    super(repo);
  }
}
