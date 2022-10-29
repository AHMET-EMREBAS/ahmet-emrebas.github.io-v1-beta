import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CustomerController,
  CustomerOwnController,
} from './controllers';
import {
  Customer,
  CustomerSubscriber,
  CustomerView,
} from './entities';
import { CustomerService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerView])],
  controllers: [CustomerController, CustomerOwnController],
  providers: [CustomerService, CustomerSubscriber],
  exports: [CustomerService],
})
export class CustomerModule {}
