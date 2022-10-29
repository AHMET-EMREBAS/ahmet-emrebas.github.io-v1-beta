import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  RoleController,
  RoleOwnController,
} from './controllers';
import {
  Role,
  RoleSubscriber,
  RoleView,
} from './entities';
import { RoleService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleView])],
  controllers: [RoleController, RoleOwnController],
  providers: [RoleService, RoleSubscriber],
  exports: [RoleService],
})
export class RoleModule {}
