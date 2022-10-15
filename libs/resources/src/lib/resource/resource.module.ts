import { Resource, ResourceView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { ResourceViewController } from './resource.view-controller';
import { ResourceViewService } from './resource.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Resource, ResourceView])],
  controllers: [ResourceController, ResourceViewController],
  providers: [ResourceService, ResourceViewService],
})
export class ResourceModule {}
