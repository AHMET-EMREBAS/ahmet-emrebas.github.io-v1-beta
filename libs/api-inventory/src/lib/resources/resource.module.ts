import {
  DeleteController,
  PostController,
  QueryController,
} from 'api-common';
import { ClassConstructor } from 'class-transformer';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

export interface ResourceModuleOptions {
  viewEntity: ClassConstructor<any>;
  entities: ClassConstructor<any>[];
  createDTO: ClassConstructor<any>;
  updateDTO: ClassConstructor<any>;
}
export function ResourceModule(moduleOptions: ResourceModuleOptions) {
  @Module({
    imports: [TypeOrmModule.forFeature(moduleOptions.entities)],
    controllers: [
      QueryController({
        viewEntity: moduleOptions.viewEntity,
        entity: moduleOptions.entities[0],
      }),
      PostController({
        entity: moduleOptions.entities[0],
        createDTO: moduleOptions.createDTO,
        updateDTO: moduleOptions.updateDTO,
      }),

      DeleteController({ entity: moduleOptions.entities[0] }),
    ],
  })
  class ResourceModule {}

  return ResourceModule;
}
