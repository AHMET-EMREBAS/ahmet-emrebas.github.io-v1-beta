import { join } from 'path';

// import * as resources from 'resource';
import {
  CacheModule,
  Module,
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
  ],
  controllers: [AppController],
  providers: [AppService, AppTasks],
})
export class AppModule {}
