import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvideRepo } from './consts';
import * as entityMap from './entities';
import { ResourceController } from './resource.controller';

const entities = Object.values(entityMap);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(__dirname, 'database', 'main.sqlite'),
      entities: entities,
      subscribers: entities,
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [ResourceController],
  providers: [ProvideRepo()],
})
export class AppModule {}
