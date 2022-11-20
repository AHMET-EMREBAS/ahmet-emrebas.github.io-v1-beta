import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Permission, PermissionView } from './entity';

import { PermissionViewService } from './permission-view.service';
import { PermissionController } from './permission.controller';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';
import { PermissionSubscriber } from './permission.subscriber';

@Module({
  controllers: [PermissionController],
  imports: [
    TypeOrmModule.forFeature([Permission, PermissionView], 'inventory'),
  ],
  providers: [
    PermissionResolver,
    PermissionService,
    PermissionViewService,
    PermissionSubscriber,
  ],
})
export class PermissionModule {}
