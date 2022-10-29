import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ReviewController,
  ReviewOwnController,
} from './controllers';
import {
  Review,
  ReviewSubscriber,
  ReviewView,
} from './entities';
import { ReviewService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Review, ReviewView])],
  controllers: [ReviewController, ReviewOwnController],
  providers: [ReviewService, ReviewSubscriber],
  exports: [ReviewService],
})
export class ReviewModule {}
