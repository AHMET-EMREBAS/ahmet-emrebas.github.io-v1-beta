import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {
  AuthModule,
  PermissionGuard,
} from 'auth';
import { join } from 'path';

import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import {
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InventoryModule } from './inventory';
import { Permission } from './inventory/models/permission';
import { User } from './inventory/models/user';
import { PermissionService } from './inventory/rest/permission';
import { UserService } from './inventory/rest/user';
import { ProductBuilderSubscriber } from './inventory/subscribers';

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
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/main.sqlite',
      autoLoadEntities: true,
      subscribers: [ProductBuilderSubscriber],
      synchronize: true,
      dropSchema: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MailerModule.forRoot({
      transport: {
        name: process.env.EMAIL_HOST,
        host: process.env.EMAIL_HOST,
        secure: true,
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: `"No Reply" <${process.env.EMAIL}>`,
      },
      template: {
        dir: __dirname + '/emails',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    InventoryModule,
    AuthModule.register({
      entities: [User, Permission],
      service: UserService,
    }),
  ],
  providers: [
    UserService,
    PermissionService,
    ProductBuilderSubscriber,
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule {}
