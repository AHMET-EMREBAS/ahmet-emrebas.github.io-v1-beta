import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Ad,
  AdView,
} from '../entities';

@Injectable()
export class AdService extends ResourceService<Ad, AdView> {
  constructor(
    @InjectRepository(Ad) repo: Repository<Ad>,
    @InjectRepository(AdView) viewRepo: Repository<AdView>
  ) {
    super(repo, viewRepo);
  }
}
