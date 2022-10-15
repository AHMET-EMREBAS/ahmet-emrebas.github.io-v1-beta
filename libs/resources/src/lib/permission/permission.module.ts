import { Permission, PermissionView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionViewController } from './permission.view-controller';
import { PermissionViewService } from './permission.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView])],
  controllers: [PermissionController, PermissionViewController],
  providers: [PermissionService, PermissionViewService],
})
export class PermissionModule {}
