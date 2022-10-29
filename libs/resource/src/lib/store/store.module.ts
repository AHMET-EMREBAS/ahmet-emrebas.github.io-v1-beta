import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  StoreController,
  StoreOwnController,
} from './controllers';
import {
  Store,
  StoreSubscriber,
  StoreView,
} from './entities';
import { StoreService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView])],
  controllers: [StoreController, StoreOwnController],
  providers: [StoreService, StoreSubscriber],
  exports: [StoreService],
})
export class StoreModule {}
