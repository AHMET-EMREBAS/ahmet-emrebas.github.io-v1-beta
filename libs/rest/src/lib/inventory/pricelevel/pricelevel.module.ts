import { Pricelevel, PricelevelView } from 'models/inventory/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricelevelPostController } from './pricelevel-post.controller';
import { PricelevelQueryController } from './pricelevel-query.controller';
import { PricelevelService } from './pricelevel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  controllers: [PricelevelQueryController, PricelevelPostController],
  providers: [PricelevelService],
})
export class PricelevelModule {}
