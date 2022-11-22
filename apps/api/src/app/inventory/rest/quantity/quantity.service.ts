import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Quantity } from './entity';

@Injectable()
export class QuantityService extends ResourceService<Quantity> {
  constructor(@InjectRepository(Quantity) repo: Repository<Quantity>) {
    super(repo);
  }
}
