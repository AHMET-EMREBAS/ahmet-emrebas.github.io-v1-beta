import { RepositoryService } from 'api-core';
import { Quantity } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuantityService extends RepositoryService<Quantity> {
  constructor(
    @InjectRepository(Quantity) quantityRepository: Repository<Quantity>
  ) {
    super(quantityRepository);
  }
}
