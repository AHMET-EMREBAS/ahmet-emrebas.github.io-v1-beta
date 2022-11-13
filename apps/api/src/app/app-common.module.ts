import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import {
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo';
import { CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Subscribers } from './app-subscribers';

export const CommonModules: Readonly<any[]> = [
  // ServeStaticModule.forRoot({
  //   rootPath: join(__dirname, 'public'),
  // }),
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
    subscribers: [...Subscribers],
    synchronize: true,
    // dropSchema: true,
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    installSubscriptionHandlers: true,
    autoSchemaFile: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  }),
];
