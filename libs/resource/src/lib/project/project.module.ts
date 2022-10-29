import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ProjectController,
  ProjectOwnController,
} from './controllers';
import {
  Project,
  ProjectSubscriber,
  ProjectView,
} from './entities';
import { ProjectService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectView])],
  controllers: [ProjectController, ProjectOwnController],
  providers: [ProjectService, ProjectSubscriber],
  exports: [ProjectService],
})
export class ProjectModule {}
