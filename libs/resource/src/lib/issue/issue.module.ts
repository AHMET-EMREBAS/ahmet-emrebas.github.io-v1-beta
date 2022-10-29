import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  IssueController,
  IssueOwnController,
} from './controllers';
import {
  Issue,
  IssueSubscriber,
  IssueView,
} from './entities';
import { IssueService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Issue, IssueView])],
  controllers: [IssueController, IssueOwnController],
  providers: [IssueService, IssueSubscriber],
  exports: [IssueService],
})
export class IssueModule {}
