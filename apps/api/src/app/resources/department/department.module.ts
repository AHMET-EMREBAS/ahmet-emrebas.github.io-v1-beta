import { Department, DepartmentView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { DepartmentViewController } from './department.view-controller';
import { DepartmentViewService } from './department.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentController, DepartmentViewController],
  providers: [DepartmentService, DepartmentViewService],
})
export class DepartmentModule {}
