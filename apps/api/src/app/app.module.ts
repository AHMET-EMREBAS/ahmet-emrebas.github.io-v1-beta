import { Sample } from 'models';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleModule } from './resources/sample/sample.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(__dirname, 'database', 'main.sqlite'),
      entities: [Sample],
      subscribers: [Sample],
      synchronize: true,
      dropSchema: true,
    }),
    SampleModule,
  ],

  providers: [],
})
export class AppModule {}
