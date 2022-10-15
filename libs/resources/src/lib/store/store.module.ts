import { Store, StoreView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { StoreViewController } from './store.view-controller';
import { StoreViewService } from './store.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView])],
  controllers: [StoreController, StoreViewController],
  providers: [StoreService, StoreViewService],
})
export class StoreModule {}
