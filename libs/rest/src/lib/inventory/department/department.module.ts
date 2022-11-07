import { Department, DepartmentView } from 'models/inventory/department';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentPostController } from './department-post.controller';
import { DepartmentQueryController } from './department-query.controller';
import { DepartmentService } from './department.service';
import { DepartmentSubscriber } from './department.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Department, DepartmentView]),
    EventEmitterModule,
  ],
  controllers: [DepartmentQueryController, DepartmentPostController],
  providers: [DepartmentService, DepartmentSubscriber],
  exports: [DepartmentService],
})
export class DepartmentModule {}
