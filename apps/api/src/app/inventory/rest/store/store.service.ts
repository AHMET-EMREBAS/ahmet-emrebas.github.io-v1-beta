import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Store } from './entity';

@Injectable()
export class StoreService extends ResourceService<Store> {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo);
  }
}
