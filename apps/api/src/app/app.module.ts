import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvideRepo } from './consts';
import { SampleModule } from './resources/sample/sample.module';

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
    SampleModule,
  ],

  providers: [ProvideRepo()],
})
export class AppModule {}
