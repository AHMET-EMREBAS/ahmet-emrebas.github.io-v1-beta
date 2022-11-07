import { Department, DepartmentView } from 'models/inventory/department';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentPostController } from './department-post.controller';
import { DepartmentQueryController } from './department-query.controller';
import { DepartmentService } from './department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentQueryController, DepartmentPostController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
