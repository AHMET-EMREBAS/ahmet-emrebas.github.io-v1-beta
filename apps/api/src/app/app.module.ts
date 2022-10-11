import * as entityMap from 'models/entities';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvideRepo } from './consts';

const entities = Object.values(entityMap);

console.log(entities);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(__dirname, 'database', 'main.sqlite'),
      entities: [],
      subscribers: [],
      synchronize: true,
      dropSchema: true,
    }),
  ],

  providers: [ProvideRepo()],
})
export class AppModule {}
