import { Quantity, QuantityView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityController } from './quantity.controller';
import { QuantityService } from './quantity.service';
import { QuantityViewController } from './quantity.view-controller';
import { QuantityViewService } from './quantity.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView])],
  controllers: [QuantityController, QuantityViewController],
  providers: [QuantityService, QuantityViewService],
})
export class QuantityModule {}
