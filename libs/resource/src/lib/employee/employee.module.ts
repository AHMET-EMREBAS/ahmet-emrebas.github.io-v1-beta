import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  EmployeeController,
  EmployeeOwnController,
} from './controllers';
import {
  Employee,
  EmployeeSubscriber,
  EmployeeView,
} from './entities';
import { EmployeeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmployeeView])],
  controllers: [EmployeeController, EmployeeOwnController],
  providers: [EmployeeService, EmployeeSubscriber],
  exports: [EmployeeService],
})
export class EmployeeModule {}
