import {
  EmailModule,
  LoggerModule,
} from 'core';

import { MailerService } from '@nestjs-modules/mailer';
import {
  CacheModule,
  Module,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppTasks } from './app-tasks';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';

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
    }),
    SampleModule,
    LoggerModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppTasks],
})
export class AppModule {
  constructor(private readonly emailService: MailerService) {
    this.emailService
      .sendMail({
        to: 'aemrebas.dev@gmail.com',
        from: `"Ahmet Emrebas" <${process.env.EMAIL}>`,
        subject: 'Hello',
        text: 'Hello, Ahmet Emrebas, we are so happy to see you here.',
        template: 'message',
        context: {
          category: 'Hello',
          title: 'Hi, Ahmet Emrebas',
          message: 'We are so happy to see you here.',
        },
      })
      .then((r) => {
        console.log(r);
      });
  }
}
