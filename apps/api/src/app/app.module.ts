import { AuthModule } from 'auth';
import { canAdministrate } from 'core';
import {
  Sub,
  SubView,
} from 'models';
import { join } from 'path';
import {
  SampleModule,
  SubModule,
  SubService,
  SubSubscriber,
} from 'rest';

import {
  CacheModule,
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppTasks } from './app-tasks';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
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
      ttl: 5,
      max: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/main.sqlite',
      autoLoadEntities: true,
      subscribers: [SubSubscriber],
      synchronize: true,
      dropSchema: true,
    }),
    TypeOrmModule.forFeature([Sub, SubView]),
    SampleModule,
    SubModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppTasks, SubService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly subService: SubService) {}
  async onModuleInit() {
    await this.subService.save({
      username: 'aemrebas.dev@gmail.com',
      password: 'aA123!',
      permission: canAdministrate(),
    });
  }
}
