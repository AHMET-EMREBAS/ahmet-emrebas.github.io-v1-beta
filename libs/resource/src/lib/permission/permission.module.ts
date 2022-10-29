import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  PermissionController,
  PermissionOwnController,
} from './controllers';
import {
  Permission,
  PermissionSubscriber,
  PermissionView,
} from './entities';
import { PermissionService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView])],
  controllers: [PermissionController, PermissionOwnController],
  providers: [PermissionService, PermissionSubscriber],
  exports: [PermissionService],
})
export class PermissionModule {}
