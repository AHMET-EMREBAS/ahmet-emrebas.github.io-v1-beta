import { CrudService } from 'core';
import {
  Sub,
  SubView,
} from 'models/sub';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubService extends CrudService<Sub, SubView> {
  constructor(
    @InjectRepository(Sub) mainRepo: Repository<Sub>,
    @InjectRepository(SubView) viewRepo: Repository<SubView>
  ) {
    super(mainRepo, viewRepo);
  }
}
