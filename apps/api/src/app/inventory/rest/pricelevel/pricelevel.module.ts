import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pricelevel, PricelevelView } from './entity';

import { PricelevelViewService } from './pricelevel-view.service';
import { PricelevelController } from './pricelevel.controller';
import { PricelevelResolver } from './pricelevel.resolver';
import { PricelevelService } from './pricelevel.service';
import { PricelevelSubscriber } from './pricelevel.subscriber';

@Module({
  controllers: [PricelevelController],
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  providers: [
    PricelevelResolver,
    PricelevelService,
    PricelevelViewService,
    PricelevelSubscriber,
  ],
})
export class PricelevelModule {}
