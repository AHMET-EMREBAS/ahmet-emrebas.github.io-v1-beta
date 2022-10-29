import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SprintController,
  SprintOwnController,
} from './controllers';
import {
  Sprint,
  SprintSubscriber,
  SprintView,
} from './entities';
import { SprintService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Sprint, SprintView])],
  controllers: [SprintController, SprintOwnController],
  providers: [SprintService, SprintSubscriber],
  exports: [SprintService],
})
export class SprintModule {}
