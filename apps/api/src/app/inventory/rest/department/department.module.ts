import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Department, DepartmentView } from '../../models/department';

import { DepartmentViewService } from './department-view.service';
import { DepartmentController } from './department.controller';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';
import { DepartmentSubscriber } from './department.subscriber';

@Module({
  controllers: [DepartmentController],
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  providers: [
    DepartmentResolver,
    DepartmentService,
    DepartmentViewService,
    DepartmentSubscriber,
  ],
})
export class DepartmentModule {}
