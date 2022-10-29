import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  AdController,
  AdOwnController,
} from './controllers';
import {
  Ad,
  AdSubscriber,
  AdView,
} from './entities';
import { AdService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Ad, AdView])],
  controllers: [AdController, AdOwnController],
  providers: [AdService, AdSubscriber],
  exports: [AdService],
})
export class AdModule {}
