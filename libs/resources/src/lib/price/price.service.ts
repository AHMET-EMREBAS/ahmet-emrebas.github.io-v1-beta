import { RepositoryService } from 'api-core';
import { Price } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PriceService extends RepositoryService<Price> {
  constructor(@InjectRepository(Price) priceRepository: Repository<Price>) {
    super(priceRepository);
  }
}
