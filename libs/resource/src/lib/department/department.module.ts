import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  DepartmentController,
  DepartmentOwnController,
} from './controllers';
import {
  Department,
  DepartmentSubscriber,
  DepartmentView,
} from './entities';
import { DepartmentService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentController, DepartmentOwnController],
  providers: [DepartmentService, DepartmentSubscriber],
  exports: [DepartmentService],
})
export class DepartmentModule {}
