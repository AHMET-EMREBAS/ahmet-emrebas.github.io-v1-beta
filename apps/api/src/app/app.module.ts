import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/main.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SampleModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
