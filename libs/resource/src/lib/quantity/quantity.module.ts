import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  QuantityController,
  QuantityOwnController,
} from './controllers';
import {
  Quantity,
  QuantitySubscriber,
  QuantityView,
} from './entities';
import { QuantityService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView])],
  controllers: [QuantityController, QuantityOwnController],
  providers: [QuantityService, QuantitySubscriber],
  exports: [QuantityService],
})
export class QuantityModule {}
