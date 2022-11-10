import { CrudService } from 'core';
import { Variant, VariantView } from 'models/inventory/variant';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VariantService extends CrudService<Variant, VariantView> {
  constructor(
    @InjectRepository(Variant) mainRepo: Repository<Variant>,
    @InjectRepository(VariantView) viewRepo: Repository<VariantView>
  ) {
    super(mainRepo, viewRepo);
  }
}
