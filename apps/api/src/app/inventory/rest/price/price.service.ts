import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Price } from '../../models/price';

@Injectable()
export class PriceService extends ResourceService<Price> {
  constructor(@InjectRepository(Price) repo: Repository<Price>) {
    super(repo);
  }
}
