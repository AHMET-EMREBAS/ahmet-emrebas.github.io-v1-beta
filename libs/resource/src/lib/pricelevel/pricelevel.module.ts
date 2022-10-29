import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  PricelevelController,
  PricelevelOwnController,
} from './controllers';
import {
  Pricelevel,
  PricelevelSubscriber,
  PricelevelView,
} from './entities';
import { PricelevelService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  controllers: [PricelevelController, PricelevelOwnController],
  providers: [PricelevelService, PricelevelSubscriber],
  exports: [PricelevelService],
})
export class PricelevelModule {}
