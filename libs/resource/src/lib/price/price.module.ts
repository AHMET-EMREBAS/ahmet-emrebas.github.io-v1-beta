import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  PriceController,
  PriceOwnController,
} from './controllers';
import {
  Price,
  PriceSubscriber,
  PriceView,
} from './entities';
import { PriceService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView])],
  controllers: [PriceController, PriceOwnController],
  providers: [PriceService, PriceSubscriber],
  exports: [PriceService],
})
export class PriceModule {}
