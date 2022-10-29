import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CommentController,
  CommentOwnController,
} from './controllers';
import {
  Comment,
  CommentSubscriber,
  CommentView,
} from './entities';
import { CommentService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, CommentView])],
  controllers: [CommentController, CommentOwnController],
  providers: [CommentService, CommentSubscriber],
  exports: [CommentService],
})
export class CommentModule {}
