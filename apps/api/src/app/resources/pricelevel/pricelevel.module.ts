import { Pricelevel, PricelevelView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricelevelController } from './pricelevel.controller';
import { PricelevelService } from './pricelevel.service';
import { PricelevelViewController } from './pricelevel.view-controller';
import { PricelevelViewService } from './pricelevel.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  controllers: [PricelevelController, PricelevelViewController],
  providers: [PricelevelService, PricelevelViewService],
})
export class PricelevelModule {}
