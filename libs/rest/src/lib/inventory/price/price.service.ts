import { CrudService } from 'core';
import { Price, PriceView } from 'models/inventory/price';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PriceService extends CrudService<Price, PriceView> {
  constructor(
    @InjectRepository(Price) mainRepo: Repository<Price>,
    @InjectRepository(PriceView) viewRepo: Repository<PriceView>
  ) {
    super(mainRepo, viewRepo);
  }
}
