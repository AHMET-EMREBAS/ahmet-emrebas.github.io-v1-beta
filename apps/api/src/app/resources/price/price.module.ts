import { Price, PriceView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { PriceViewController } from './price.view-controller';
import { PriceViewService } from './price.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView])],
  controllers: [PriceController, PriceViewController],
  providers: [PriceService, PriceViewService],
})
export class PriceModule {}
