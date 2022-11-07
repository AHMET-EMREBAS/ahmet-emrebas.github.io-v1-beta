import { CrudService } from 'core';
import { Quantity, QuantityView } from 'models/inventory/quantity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuantityService extends CrudService<Quantity, QuantityView> {
  constructor(
    @InjectRepository(Quantity) mainRepo: Repository<Quantity>,
    @InjectRepository(QuantityView) viewRepo: Repository<QuantityView>
  ) {
    super(mainRepo, viewRepo);
  }
}
