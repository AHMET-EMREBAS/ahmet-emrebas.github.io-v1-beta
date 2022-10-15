import {
  filterEntityClasses,
  filterModuleClasses,
} from 'api-core';
import { AuthModule } from 'auth';
import * as models from 'models';
import { join } from 'path';
import * as resources from 'resources';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const ResourceModules = filterModuleClasses(resources);
const Entities = filterEntityClasses(models);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(__dirname, 'database', 'main.sqlite'),
      entities: Entities,
      subscribers: Entities,
      synchronize: true,
      dropSchema: true,
    }),
    ...ResourceModules,
    AuthModule,
  ],

  providers: [],
})
export class AppModule {}
