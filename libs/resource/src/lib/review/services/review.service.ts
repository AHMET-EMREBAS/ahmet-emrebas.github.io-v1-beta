import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Review,
  ReviewView,
} from '../entities';

@Injectable()
export class ReviewService extends ResourceService<Review, ReviewView> {
  constructor(
    @InjectRepository(Review) repo: Repository<Review>,
    @InjectRepository(ReviewView) viewRepo: Repository<ReviewView>
  ) {
    super(repo, viewRepo);
  }
}
