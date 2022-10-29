import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  LogController,
  LogOwnController,
} from './controllers';
import {
  Log,
  LogSubscriber,
  LogView,
} from './entities';
import { LogService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Log, LogView])],
  controllers: [LogController, LogOwnController],
  providers: [LogService, LogSubscriber],
  exports: [LogService],
})
export class LogModule {}
