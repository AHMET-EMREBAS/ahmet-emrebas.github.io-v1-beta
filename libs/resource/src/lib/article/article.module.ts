import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ArticleController,
  ArticleOwnController,
} from './controllers';
import {
  Article,
  ArticleSubscriber,
  ArticleView,
} from './entities';
import { ArticleService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Article, ArticleView])],
  controllers: [ArticleController, ArticleOwnController],
  providers: [ArticleService, ArticleSubscriber],
  exports: [ArticleService],
})
export class ArticleModule {}
