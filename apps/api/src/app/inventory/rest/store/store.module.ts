import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Store, StoreView } from './entity';

import { StoreViewService } from './store-view.service';
import { StoreController } from './store.controller';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { StoreSubscriber } from './store.subscriber';

@Module({
  controllers: [StoreController],
  imports: [TypeOrmModule.forFeature([Store, StoreView], 'inventory')],
  providers: [StoreResolver, StoreService, StoreViewService, StoreSubscriber],
})
export class StoreModule {}
