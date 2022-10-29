import {
  EmailModule,
  LoggerModule,
} from 'core';
import * as resources from 'resource';

import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppTasks } from './app-tasks';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMiddleware } from './user.middleware';

const resourceModules = Object.entries(resources)
  .filter(([key, value]) => value.name.endsWith('Module'))
  .map(([key, value]) => value);

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      global: true,
      wildcard: true,
      delimiter: '.',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/main.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    LoggerModule,
    EmailModule,
    ...(resourceModules as any),
  ],
  controllers: [AppController],
  providers: [AppService, AppTasks],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*');
  }
}
