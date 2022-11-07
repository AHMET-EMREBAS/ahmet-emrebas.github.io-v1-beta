import { Store, StoreView } from 'models/inventory/store';

import { Pricelevel } from 'models/inventory/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StorePostController } from './store-post.controller';
import { StoreQueryController } from './store-query.controller';
import { StoreService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView, Pricelevel])],
  controllers: [StoreQueryController, StorePostController],
  providers: [StoreService],
})
export class StoreModule {}
