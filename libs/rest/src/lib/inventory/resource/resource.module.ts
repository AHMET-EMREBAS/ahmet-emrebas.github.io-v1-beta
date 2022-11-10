import { Resource, ResourceView } from 'models/inventory/resource';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResourcePostController } from './resource-post.controller';
import { ResourceQueryController } from './resource-query.controller';
import { ResourceService } from './resource.service';
import { ResourceSubscriber } from './resource.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Resource, ResourceView])],
  controllers: [ResourceQueryController, ResourcePostController],
  providers: [ResourceService, ResourceSubscriber],
})
export class ResourceModule {}
