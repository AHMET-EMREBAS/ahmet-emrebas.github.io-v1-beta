import * as models from 'models';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as resources from './resources';

const ResourceModules = Object.entries(resources)
  .filter(([key, value]) => key.endsWith('Module'))
  .map(([key, value]) => value);

const Entities = Object.entries(models)
  .filter(([key, value]) => !key.endsWith('DTO'))
  .map(([key, value]) => value);

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
  ],

  providers: [],
})
export class AppModule {}
