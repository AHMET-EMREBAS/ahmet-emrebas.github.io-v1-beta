import { Pricelevel, PricelevelView } from 'models/inventory/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricelevelPostController } from './pricelevel-post.controller';
import { PricelevelQueryController } from './pricelevel-query.controller';
import { PricelevelService } from './pricelevel.service';
import { PricelevelSubscriber } from './pricelevel.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  controllers: [PricelevelQueryController, PricelevelPostController],
  providers: [PricelevelService, PricelevelSubscriber],
  exports: [PricelevelService],
})
export class PricelevelModule {}
