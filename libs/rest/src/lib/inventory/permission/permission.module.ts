import { Permission, PermissionView } from 'models/inventory/permission';

import { Resource } from 'models/inventory/resource';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PermissionPostController } from './permission-post.controller';
import { PermissionQueryController } from './permission-query.controller';
import { PermissionService } from './permission.service';
import { PermissionSubscriber } from './permission.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView, Resource])],
  controllers: [PermissionQueryController, PermissionPostController],
  providers: [PermissionService, PermissionSubscriber],
})
export class PermissionModule {}
