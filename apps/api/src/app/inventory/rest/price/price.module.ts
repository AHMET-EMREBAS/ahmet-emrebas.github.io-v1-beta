import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Price, PriceView } from './entity';

import { PriceViewService } from './price-view.service';
import { PriceController } from './price.controller';
import { PriceResolver } from './price.resolver';
import { PriceService } from './price.service';
import { PriceSubscriber } from './price.subscriber';

@Module({
  controllers: [PriceController],
  imports: [TypeOrmModule.forFeature([Price, PriceView])],
  providers: [PriceResolver, PriceService, PriceViewService, PriceSubscriber],
})
export class PriceModule {}
